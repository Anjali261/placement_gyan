// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var shortid = require('shortid');

// load up the user model
var User = require('../models/user');

// load the auth variables
var auth = require('./auth');
var configAuth;
if (process.env.PGENV === 'production')
    configAuth = auth.production;
else
    configAuth = auth.development;

module.exports = function(passport) {


    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function() {
                User.findOne({ 'local.email': email }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    // if no user is found, return the message
                    if (!user)
                        return done(null, false, req.flash('loginMessage', 'Invalid Username.'));

                    if (!user.validPassword(password))
                        return done(null, false, req.flash('loginMessage', 'Oops! Invalid password.'));

                    // all is well, return user
                    else
                        return done(null, user);
                });
            });

        }));

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    passport.use('local-signup', new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        },
        function(req, email, password, done) {
            if (email)
                email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

            // asynchronous
            process.nextTick(function() {

                // Check if username is already taken
                User.findOne({ 'userName': req.body.userName }, function(err, user) {
                    // if there are any errors, return the error
                    if (err)
                        return done(err);

                    if (user)
                        return done(null, false, req.flash('signupMessage', 'User with this userName already exists.'));

                    // if the user is not already logged in:
                    if (!req.user) {
                        // if the user is logged in but has no local account...
                        User.findOne({ 'local.email': email }, function(err, user) {
                            // if there are any errors, return the error
                            if (err)
                                return done(err);

                            // check to see if theres already a user with that email
                            if (user) {
                                return done(null, false, req.flash('signupMessage', 'User with this email already exists.'));
                            } else {

                                // create the user
                                var newUser = new User();

                                newUser.local.email = email;
                                newUser.local.password = newUser.generateHash(password);
                                newUser.userName = req.body.userName;

                                newUser.save(function(err) {
                                    if (err)
                                        return done(err);

                                    return done(null, newUser);
                                });
                            }
                        });
                    } else if (!req.user.local.email) {
                        // ...presumably they're trying to connect a local account
                        // BUT let's check if the email used to connect a local account is being used by another user
                        User.findOne({ 'local.email': email }, function(err, user) {
                            if (err)
                                return done(err);

                            if (user) {
                                return done(null, false, req.flash('loginMessage', 'That email is already taken.'));
                                // Using 'loginMessage instead of signupMessage because it's used by /connect/local'
                            } else {
                                var user = req.user;
                                user.local.email = email;
                                user.local.password = user.generateHash(password);
                                user.userName = req.body.userName;

                                user.save(function(err) {
                                    if (err)
                                        return done(err);

                                    return done(null, user);
                                });
                            }
                        });
                    } else {
                        // user is logged in and already has a local account. Ignore signup. (You should log out before trying to create a new account, user!)
                        return done(null, req.user);
                    }
                });
            });
        }));

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({

            clientID: configAuth.googleAuth.clientID,
            clientSecret: configAuth.googleAuth.clientSecret,
            callbackURL: configAuth.googleAuth.callbackURL,
            passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)

        },
        function(req, token, refreshToken, profile, done) {
            // asynchronous
            process.nextTick(function() {

                // check if the user is already logged in
                if (!req.user) {
                    User.findOne({ 'google.id': profile.id }, function(err, user) {
                        if (err)
                            return done(err);

                        if (user) {
                            // if there is a user id already but no token (user was linked at one point and then removed)
                            if (!user.google.token) {
                                user.google.token = token;
                                //console.log('GOOGLE PROFILE: ' + JSON.stringify(profile));
                                user.google.name = profile.displayName;
                                user.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email
                                user.google.pic = (profile.photos[0].value || '');
                                /*
                                suggestUserName(user.userName, profile.displayName, function(err, un) {
                                    if (err)
                                        user.userName = user.userName || profile.displayName.replace(/ /g, "_") + '_' + shortid.generate();
                                    else
                                        user.userName = un;

                                    user.save(function(err) {
                                        if (err)
                                            return done(err);

                                        return done(null, user);
                                    });
                                })
                                */
                            }

                            return done(null, user);
                        } else {
                            var newUser = new User();
                            //console.log('GOOGLE PROFILE: ' + JSON.stringify(profile));
                            newUser.google.id = profile.id;
                            newUser.google.token = token;
                            newUser.google.name = profile.displayName;
                            newUser.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email
                            newUser.google.pic = (profile.photos[0].value || '');
                            suggestUserName(null, profile.displayName, function(err, un) {
                                if (err)
                                    newUser.userName = displayName.replace(/ /g, "_") + '_' + shortid.generate();
                                else
                                    newUser.userName = un;
                                newUser.save(function(err) {
                                    if (err)
                                        return done(err);

                                    return done(null, newUser);
                                });
                            })
                        }
                    });

                } else {
                    // user already exists and is logged in, we have to link accounts
                    var user = req.user; // pull the user out of the session

                    user.google.id = profile.id;
                    user.google.token = token;
                    //console.log('GOOGLE PROFILE: ' + JSON.stringify(profile));

                    user.google.name = profile.displayName;
                    user.google.email = (profile.emails[0].value || '').toLowerCase(); // pull the first email
                    user.google.pic = (profile.photos[0].value || '');

                    User.findOne({ 'google.id': profile.id }, function(err, userObj) {
                        if (err)
                            return done(err);

                        if (!userObj) {
                            suggestUserName(user.userName, profile.displayName, function(err, un) {
                                if (err)
                                    user.userName = user.userName || profile.displayName.replace(/ /g, "_") + '_' + shortid.generate();
                                else
                                    user.userName = un;

                                user.save(function(err) {
                                    if (err)
                                        return done(err);

                                    return done(null, user);
                                });
                            })
                        } else {
                            return done(null, user);
                        }
                    })
                }

            });

        }));
    // ** fn suggestUserName** //
    function suggestUserName(userName, displayName, callback) {
        if (userName) {
            callback(null, userName);
        } else {
            var _newName = displayName.replace(/ /g, "_");
            User.findOne({ 'userName': _newName }, function(err, _user) {
                if (err)
                    callback(err, null);
                if (_user) {
                    dot_newName = displayName.replace(/ /g, ".");
                    User.findOne({ 'userName': dot_newName }, function(err, dotuser) {
                        if (err)
                            callback(err, null);
                        if (dotuser) {
                            shortId_newName = displayName.replace(/ /g, "_") + '_' + shortid.generate();
                            callback(null, shortId_newName);
                        } else {
                            callback(null, dot_newName);
                        }
                    })
                } else {
                    callback(null, _newName);
                }
            })
        }
    }
    // ** fn suggestUserName** //
};
