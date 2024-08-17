const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    userId      : {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User"
                  },
    title       : String,
    date        : Date,
    company     : String,
    content     : String,
    placed      : Boolean,
    // tags        : [],
    deleted     : { default:false, type:Boolean},
    private     : { default:false, type:Boolean },
    likes       :[
                    {
                        userId:{
                            type:mongoose.Schema.Types.ObjectId,
                            ref:"User"
                        }
                    }
                  ],
    disLikes    :[{
                      userId:{
                          type:mongoose.Schema.Types.ObjectId,
                          ref:"User"
                      }
                  }],
    comments    :[{
                    userId:{
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"User"
                    },
                    text:{
                        type:String,
                        required:true
                    }
                }],
    problems:[
            {
                        type:mongoose.Schema.Types.ObjectId,
                        ref:"Problem"
            }
    ],
    accepted: Boolean,
    rejected: Boolean,
    reject_reason : String,
})

module.exports = Article = mongoose.model("Article", articleSchema);

