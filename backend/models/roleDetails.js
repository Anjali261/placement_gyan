const mongoose = require("mongoose");

const roleDetailsSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, ref:'User'},
    role: {
      type: String,
      enum:["User","Admin"]
    },
    position: String,
    batch: String,
    registrationNumber: String,
    branch : String,
    college: String
}, { timestamps: true }, );

roleDetailsSchema.index({userId:1,siteName:1},{unique:true});
// create the model for users and expose it to our app
module.exports = mongoose.model('roleDetails', roleDetailsSchema);
