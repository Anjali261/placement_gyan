const mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        maxlength: 256,
        trim: true,
        required: true,
      },
      firstName: String,
      lastName: String,

    local: {
      email: String,
      password: String,
      resetCode: String
    },
    google: {
      id: String,
      token: String,
      email: String,
      name: String,
      pic: String
    },
    phoneNumber:{
        type: String,
        trim: true,
        maxlength: 10,
        minlength: 10,
    },
    address: String,
    avatar: String,
    isActive:{
        type:Boolean,
        default:1
    },
    most_comfortable_coding_language:{
      type:String,
    },
    role:{
      type:String,
      default:"User"
    }
}, { timestamps: true }, );

userSchema.plugin(mongoosePaginate);

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.pre('save', function(next) {
    // get the current date
    var currentDate = new Date();

    // change the updated_at field to current date
    this.updationDate = currentDate;

    // if created_at doesn't exist, add to that field
    if (!this.creationDate)
        this.creationDate = currentDate;

    next();
});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
