const mongoose = require("mongoose");

const socialProfileSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, ref:'User'},
    siteName:String,
    siteUsername: String,
    profileLink: String,
}, { timestamps: true }, );

socialProfileSchema.index({userId:1,siteName:1},{unique:true});
// create the model for users and expose it to our app
module.exports = mongoose.model('socialProfile', socialProfileSchema);

