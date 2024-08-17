
const chalk = require('chalk');
const User = require('../models/user');
var config = require('../config/config')
const jwt = require('jsonwebtoken');
var env_config = config.production;

// MIDDLEWARE FUNCTION TO CHECK THE TOKEN
module.exports.verifyUser = function(req, res, next) {
    const token = req.headers.token;
    //  console.log(token);
    if (!token) return res.status(401).send("Access Denied")
    try {
            const verified = jwt.verify(token, env_config.jwt_secret);
            req.user = verified;
            // console.log(req.user);
            next();
        } catch (error) {
            console.log(error);
            
            return res.status(400).send('Invalid Token');
        }
    }

exports.compareIds = async (req,id) =>{
    const token = req.headers.token;
    // console.log(token);
    if (!token) return false;
   try {
        const verified = jwt.verify(token, env_config.jwt_secret);
        req.user = verified;
        // console.log(req.user);
        if(req.user._id!=id)
        return false;
        return true;
   } catch (error) {
       console.log(error);
       return ;
   }
}

module.exports.verifyFaculty =async  (req,res,next)=>{
    const token = req.headers.token;
    // console.log(token);
    if (!token) return res.status(401).send("Access Denied")
    try {
            const verified = jwt.verify(token, env_config.jwt_secret);
            req.user = verified;
            // console.log(req.user);
            if(req.user.role=="Student")
                return res.status(401).send("Access Denied")
            else{
                let AdminExist = await User.findOne({email:req.user.email,role:"Admin"});
                let FacultyExist = await User.findOne({email:req.user.email,role:"Faculty"});
                // console.log(chalk.green(exist));
                if(!AdminExist && !FacultyExist)
                return res.status(401).send("Access Denied")

            }
            next();
        } catch (error) {
            console.log(error);

            return res.status(400).send('Invalid Token');
        }
}
