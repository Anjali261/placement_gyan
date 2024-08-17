const User = require('../models/user');
const axios = require("axios");
const CLIENT_ID = "479946233198-qdpn3s314aaokbfjdhph1s954kkpp82p.apps.googleusercontent.com";
const logger = require("../utils/logger").getLogger();
const jwt = require('jsonwebtoken');
const config = require("../config/config")
const env_config = config.get_active_config();

exports.googleLogin = async (req,res)=>{
    // logger.info(req.body);

    let checkAuth = await checkToken(req.body.token);
    // logger.debug("checkauth is ",checkAuth);
    if(!checkAuth)
        return res.status(401).send({ msg:"Unauthorized Access"})

    if(checkAuth.data.error==='invalid_token' || checkAuth.data.expires_in<0 ||checkAuth.data.issued_to!=CLIENT_ID || checkAuth.data.user_id!=req.body.id){
        return res.status(401).json({
            msg:"Unauthorized Access"
        })
    }
    else
    console.log("auth done");

    //if validated then finding user in db
   let user = await User.findOne({ "google.email": req.body.email });

            if (user) {
                console.log("user is " + user);
                //res.json({done:'Already Registered!'})
                const payload = {
                    _id: user._id,
                    name: user.google.name,
                    email: user.google.email,
                    role: user.role
                }
                // console.log(payload)

                logger.debug(env_config);
                let token = jwt.sign(payload,env_config.jwt_secret, { expiresIn: '24h' })
                //console.log(token);
                return res.json(token)
            }
             else {

                const userData = {
                    userName:req.body.name,
                    google:{
                      id:req.body.id,
                      token:req.body.token,
                      email:req.body.email,
                      name:req.body.name,
                      pic:req.body.pic
                    }
                }

                user = await User.create(userData);
                logger.info("new user created",user);

                        const payload = {
                            _id: user._id,
                            name: user.google.name,
                            email: user.google.email,
                            role: user.role
                        }

                        // console.log(payload)

                        let token = jwt.sign(payload, env_config.jwt_secret, { expiresIn: '24h' });
                        return res.json(token)

            }

  }


const checkToken = async (token) => {
      return await axios.get(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
}

