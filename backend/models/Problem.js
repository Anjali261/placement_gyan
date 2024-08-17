const mongoose =require('mongoose');
const Schema = mongoose.Schema;

var ProblemSchema = new mongoose.Schema({
    problem_name                      : String,
    problem_view_link                 : String,
    site_name                         : {type:String,required:true},
    problem_id                        : {type:String,required:true},
    contest_id                        : String,
    problem_code                      : {type:String,required:true},
    problem_statement                 : String,
    input_format                      : String,
    output_format                     : String,
    constraints                       : String,
    languages_supported               : [String],
    sample_test_cases                 : [
                                            {
                                                input:String,
                                                output:String,
                                                explanation:String
                                            }
                                        ],
    sample_inputs                       :String,
    sample_outputs                      :String,
    explanation                         : String,
    online_judge                       : String
}, { timestamps: true }, )

ProblemSchema.index({ site_name: 1, problem_code: 1 }, { unique: true });


module.exports = mongoose.model("Problem", ProblemSchema);
