const Article = require("../models/article");
// const logger = require
const timeago = require("timeago.js")
const logger = require('../utils/logger').getLogger();

exports.createArticle = async function(req,res){
        let new_article = new Article({
            userId: req.user._id,
            title: req.body.title,
            date:req.body.date,
            company: req.body.company,
            content : req.body.content,
            placed : req.body.placed || true,
            deleted: false,
            private: false,
            accepted: false,
            rejected: false,
            problems : req.body.problemIds
        })
        // console.log(new_article);
        new_article = await new_article.save();
        res.status(200).send({data:"success"});
}

exports.getNotReviewedArticles = async (req,res)=>{
      let articles = await Article.find({accepted:false,rejected:false}).populate({
        path:"userId",
        select:{
            userName:1,
            'google.email':1
        }
      }).populate({ path: 'problems',
          select: {
            problem_name:1,
            problem_view_link:1
          }
      })
      ;

      logger.debug("articles are",articles);
      for(var i=0;i<articles.length;i++){

            articles[i].date = timeago.format(articles[i].date);
      }
      return res.status(200).send(articles);
}

exports.getArticles = async function(req,res){
        let all_article = await Article.find({accepted: true})
        .populate({path:'userId'})
        .populate({ path: 'problems',
          select: {
            problem_name:1,
            problem_view_link:1
          }
      });

        all_article.slice(req.body.limit*req.body.page , req.body.limit*req.body.page+req.body.limit );

        res.status(200).send( {
            data  :all_article,
            total :all_article.length,
            page  :req.body.page
            });
}

exports.approveArticle = async(req,res) =>{
    let articleId = req.body.articleId;
        let articleUpdateStatus = await Article.findByIdAndUpdate(articleId,{
        accepted:true
    });

    logger.debug(articleUpdateStatus);
    return res.status(200).send({msg:"article approval successful"});
}

exports.rejectArticle = async(req,res)=>{
    let articleId = req.body.articleId;

    let articleUpdateStatus = await Article.findByIdAndUpdate(articleId,{
      rejected:true
    });

    logger.debug(articleUpdateStatus);
    return res.status(200).send({msg:"article rejection successful"});
}

exports.getArticleByCompanyNotVerified = async (req,res)=>{
  console.log(`finding article by company name = ${req.params.name}`)
  var name = req.params.name;
  const articles = await Article.find({company:{$regex:name,$options:"$i"},accepted:false})
                                                 .populate({path:'userId'})
                                                .populate({ path: 'problems',
                                                  select: {
                                                    problem_name:1,
                                                    problem_view_link:1
                                                  }
                                              });
console.log(articles);
  return res.status(200).send({
      articles
  });
}

exports.getArticleByCompanyVerified = async (req,res)=>{
  console.log(`finding article by company name = ${req.params.name}`)
  var name = req.params.name;
  const articles = await Article.find({company:{$regex:name,$options:"$i"},accepted:true})
                                                 .populate({path:'userId'})
                                                .populate({ path: 'problems',
                                                  select: {
                                                    problem_name:1,
                                                    problem_view_link:1
                                                  }
                                              });
console.log(articles);
  return res.status(200).send({
      articles
  });
}

exports.getArticleByTitleVerified = async(req,res)=>{

  console.log(`finding article by Title = ${req.params.name}`)
  var name = req.params.name;
  const articles = await Article.find({title:{$regex:name,$options:"$i"},accepted:true})
                                                 .populate({path:'userId'})
                                                .populate({ path: 'problems',
                                                  select: {
                                                    problem_name:1,
                                                    problem_view_link:1
                                                  }
                                              });

  return res.status(200).send({
      articles
  });
}

exports.getArticleByTitleNotVerified = async(req,res)=>{

  console.log(`finding article by Title = ${req.params.name}`)
  var name = req.params.name;
  const articles = await Article.find({title:{$regex:name,$options:"$i"},accepted:false})
                                                 .populate({path:'userId'})
                                                .populate({ path: 'problems',
                                                  select: {
                                                    problem_name:1,
                                                    problem_view_link:1
                                                  }
                                              });

  return res.status(200).send({
      articles
  });
}

exports.getArticleByTitle = async(req,res)=>{

}
