// config/auth.js
var env = process.env.PGENV || 'development',
    config = require('./config')[env];
// expose our config directly to our application using module.exports
module.exports = {
    development: {
        'googleAuth': {
            "clientID":"479946233198-qdpn3s314aaokbfjdhph1s954kkpp82p.apps.googleusercontent.com",
            "clientSecret":"NEc9TjM9h8tRNTzcqXmIlzt8",
            'callbackURL': 'http://localhost:' + config.web_port + '/auth/google/callback'
        }
    },
    production: {
        'googleAuth': {
            "clientID":"479946233198-qdpn3s314aaokbfjdhph1s954kkpp82p.apps.googleusercontent.com",
            "clientSecret":"NEc9TjM9h8tRNTzcqXmIlzt8",
            "callbackURL":"https://placements-gyaan.herokuapp.com/auth/google/callback"
            }
    }
};
