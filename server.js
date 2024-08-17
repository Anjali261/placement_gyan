const express = require('express');
const app = express();
const dbconnect = require('./backend/db/connect');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const env_config = require('./backend/config/config');
const port = env_config.get_active_config().web_port;
const jwt=require('jsonwebtoken');
const passport = require("passport");

// Passport
require('./backend/config/passport')(passport);
app.use(passport.initialize())
dbconnect.connect(true);
app.use(morgan('dev'));

app.use(bodyParser.json({
    limit: '50mb'
  }));

  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 1000000,
    extended: true
  }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(cors());

app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist/placements-gyaan')))

var allRoutes = require('./backend/routes/allRoutes');

app.use('/api',allRoutes);

// global error handler
app.use(function(err,req,res,next){
  console.log("error handler caught error",err);
  res.status(500).send({"msg":"something went wrong please try after sometime"});
})

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist/placements-gyaan/index.html')));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
