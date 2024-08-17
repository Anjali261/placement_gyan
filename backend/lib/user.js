const Article = require("../models/article");
const User = require("../models/user");
const socialProfile = require("../models/socialProfile");

exports.userDetail = async function(req,res){
    try {
        let user = await User.findOne({_id:req.user._id});
        let linkedin_user_handle,github_user_handle,facebook_user_handle,insta_user_handle,twitter_user_handle ;
        let userHandle = await socialProfile.findOne({userId:req.user._id,siteName:"LINKEDIN"});
        if(userHandle)
        linkedin_user_handle = userHandle.siteUsername;

        userHandle = await socialProfile.findOne({userId:req.user._id,siteName:"GITHUB"});
        if(userHandle)
        github_user_handle = userHandle.siteUsername;

        userHandle = await socialProfile.findOne({userId:req.user._id,siteName:"FACEBOOK"});
        if(userHandle)
        facebook_user_handle = userHandle.siteUsername;

        userHandle = await socialProfile.findOne({userId:req.user._id,siteName:"INSTAGRAM"});
        if(userHandle)
        insta_user_handle = userHandle.siteUsername;

        userHandle = await socialProfile.findOne({userId:req.user._id,siteName:"TWITTER"});
        if(userHandle)
        twitter_user_handle = userHandle.siteUsername;

        res.status(200).send({data:user,linkedin_user_handle,github_user_handle,facebook_user_handle,insta_user_handle,twitter_user_handle});
    } catch (error) {
        console.log(error);
        res.status(500).send({data: error})
    }
}

exports.userDetailUpdate = async function(req,res){
    try {
        // console.log(req.body);
        let user = await User.updateOne({_id:req.user._id},{phoneNumber:req.body.phone_number,name:req.body.name,most_comfortable_coding_language:req.body.most_comfortable_coding_language});

        if(req.body.linkedin_user_handle){
        let linkedin_user = await socialProfile.findOne({userId:req.user._id,siteName:"LINKEDIN"});
        if(linkedin_user)
        linkedin_user = await socialProfile.updateOne({userId:req.user._id,siteName:"LINKEDIN"},{siteUsername:req.body.linkedin_user_handle})
        else{
            linkedin_user = new socialProfile({
                userId: req.user._id,
                siteName:"LINKEDIN",
                siteUsername: req.body.linkedin_user_handle,
            })
            await linkedin_user.save();
        }
        }

        if(req.body.github_user_handle){
            let linkedin_user = await socialProfile.findOne({userId:req.user._id,siteName:"GITHUB"});
            if(linkedin_user)
            linkedin_user = await socialProfile.updateOne({userId:req.user._id,siteName:"GITHUB"},{siteUsername:req.body.github_user_handle})
            else{
                linkedin_user = new socialProfile({
                    userId: req.user._id,
                    siteName:"GITHUB",
                    siteUsername: req.body.github_user_handle,
                })
                await linkedin_user.save();
            }
            }


            if(req.body.facebook_user_handle){
                let linkedin_user = await socialProfile.findOne({userId:req.user._id,siteName:"FACEBOOK"});
                if(linkedin_user)
                linkedin_user = await socialProfile.updateOne({userId:req.user._id,siteName:"FACEBOOK"},{siteUsername:req.body.facebook_user_handle})
                else{
                    linkedin_user = new socialProfile({
                        userId: req.user._id,
                        siteName:"FACEBOOK",
                        siteUsername: req.body.facebook_user_handle,
                    })
                    await linkedin_user.save();
                }
            }

            if(req.body.insta_user_handle){
                let linkedin_user = await socialProfile.findOne({userId:req.user._id,siteName:"INSTAGRAM"});
                if(linkedin_user)
                linkedin_user = await socialProfile.updateOne({userId:req.user._id,siteName:"INSTAGRAM"},{siteUsername:req.body.insta_user_handle})
                else{
                    linkedin_user = new socialProfile({
                        userId: req.user._id,
                        siteName:"INSTAGRAM",
                        siteUsername: req.body.insta_user_handle,
                    })
                    await linkedin_user.save();
                }
            }

            if(req.body.twitter_user_handle){
                let linkedin_user = await socialProfile.findOne({userId:req.user._id,siteName:"TWITTER"});
                if(linkedin_user)
                linkedin_user = await socialProfile.updateOne({userId:req.user._id,siteName:"TWITTER"},{siteUsername:req.body.twitter_user_handle})
                else{
                    linkedin_user = new socialProfile({
                        userId: req.user._id,
                        siteName:"TWITTER",
                        siteUsername: req.body.twitter_user_handle,
                    })
                    await linkedin_user.save();
                }
            }
            

        res.status(200).send({msg:"updated",data:user});
    } catch (error) {
        console.log(error);
        res.status(500).send({data: error})
    }
}