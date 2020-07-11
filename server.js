/**
 * server.js
 * Cerbanimo API Backend
 * Created: 2020-06-27
 */

//requires
var express = require('express');
var path = require('path');

//internal modules
var mongodb = require('./model/mongo');

//routes
var authRouter = require('./routes/auth');
var projectRouter = require('./routes/project');
var addRouter = require('./routes/add');
var removeRouter = require('./routes/remove');

//constants
//const PORT = 3443;
const PORT = 3080;
const app = express();

//enable JSON parsing
app.use(express.json());
app.use(require('body-parser').urlencoded({ extended: false })); //for parsing HTTP form requests




// Add headers for !!!TESTING!!!
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'null');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});





/**********************
 * Routes
 **********************/

//home
app.get('/', (req, res) => res.send('Cerbanimo - Coming Soon'));

//auth
app.use('/auth', authRouter);

//project
app.use('/project', projectRouter);
  
//add
app.use('/add', addRouter);

//remove
app.use('/remove', removeRouter);

//user
app.get('/user', (req, res) => {
  res.send('Path: /user');
});


//catch bad requests
app.post('*', (req, res) => {
  res.sendStatus(404); //Not Found
})

app.get('*', (req, res) => {
  res.sendStatus(404); //Not Found
});


//start the servesr
app.listen(PORT, () => {
  console.log(`Cerbanimo API listening at http://localhost:${PORT}`);
});