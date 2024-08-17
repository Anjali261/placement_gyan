const Problem = require('../models/Problem');

exports.searchProblem = async (req,res)=>{
  console.log(`finding problem by name = ${req.params.name}`)
  var name = req.params.name;
  const problems = await Problem.find({problem_name:{$regex:name,$options:"$i"}})

  return res.status(200).send({
      problems
  });
}
