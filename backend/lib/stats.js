const ie = require('../../User.json');
const article = require('../models/article');


exports.pieStats = async (req, res) => {

  let len_one = await article.find({accepted:true});
  let len_two = await article.find({accepted:true,placed:true});

  len_one= len_one.length;
  len_two= len_two.length;
  len_one = len_one - len_two;
  console.log(len_one,len_two);


    res.status(200).send({ accepted:len_two,rejected:len_one });
}