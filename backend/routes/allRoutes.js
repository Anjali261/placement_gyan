
const express = require('express');
const app = express.Router();
const articleLib = require('../lib/article')
const {verifyUser} = require("../middleware/verificationMiddleware");
const authLib = require('../lib/authLib');
const userLib = require('../lib/user');
const runScript = require('../lib/script');
const problemLib = require("../lib/problemLib");
const stats = require('../lib/stats');

const asyncHandler = fn => (req, res, next) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};

//  ========== PROBLEM ROUTES =========
app.get("/problems/getProblemByName/:name",asyncHandler(problemLib.searchProblem));

// =============ARTICLE ROUTES===========
app.post("/get/articles",verifyUser,asyncHandler(articleLib.getArticles));
app.post("/article/create",verifyUser,asyncHandler(articleLib.createArticle));
app.get("/article/not-reviewed",verifyUser,asyncHandler(articleLib.getNotReviewedArticles));
app.post("/approve-article",verifyUser,asyncHandler(articleLib.approveArticle));
app.post("/reject-article",verifyUser,asyncHandler(articleLib.rejectArticle));
app.get("/articles/getArticleByTitleVerified/:name",verifyUser,asyncHandler(articleLib.getArticleByTitleVerified));
app.get("/articles/getArticleByTitleNotVerified/:name",verifyUser,asyncHandler(articleLib.getArticleByTitleNotVerified));
app.get("/articles/getArticlesByCompanyNotVerified/:name",verifyUser,asyncHandler(articleLib.getArticleByCompanyNotVerified));
app.get("/articles/getArticlesByCompanyVerified/:name",verifyUser,asyncHandler(articleLib.getArticleByCompanyVerified));

// ===============AUTH ROUTES===========
app.post("/auth/google",asyncHandler(authLib.googleLogin));


//  ============= USER ROUTES ===================
app.post("/profile/detail/update",verifyUser,asyncHandler(userLib.userDetailUpdate));
app.get('/user/detail',verifyUser,asyncHandler(userLib.userDetail));

// ############################ RUN SCRIPT #############################

// app.get("/run/script",runScript.runScript);


// ######################### STATS #########################

app.get('/pie/stats',verifyUser,asyncHandler(stats.pieStats))


module.exports = app;
