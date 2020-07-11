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
app.get('/project', (req, res) => {
  res.send('Path: /project');
});

app.get('/project/getstatus', (req, res) => {
  res.send('Path: /project/getstatus');
});

app.get('/project/getprojects', (req, res) => {
  res.send('Path: /project/getprojects');
});

app.get('/project/getnodes', (req, res) => {
  res.send('Path: /project/getnodes');
});

app.get('/project/gettasks', (req, res) => {
  res.send('Path: /project/gettasks');
});

//add
app.get('/add', (req, res) => {
  res.send('Path: /add');
});

app.get('/add/project', (req, res) => {
  res.send('Path: /add/project');
});

app.get('/add/node', (req, res) => {
  res.send('Path: /add/node');
});

app.get('/add/task', (req, res) => {
  res.send('Path: /add/task');
});

//remove
app.get('/remove', (req, res) => {
  res.send('Path: /remove');
});

app.get('/remove/project', (req, res) => {
  res.send('Path: /remove/project');
});

app.get('/remove/node', (req, res) => {
  res.send('Path: /remove/node');
});

app.get('/remove/task', (req, res) => {
  res.send('Path: /remove/task');
});

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