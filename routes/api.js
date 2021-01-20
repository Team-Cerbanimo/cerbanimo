/**
 * api.js
 * Cerbanimo API Backend - API Routes
 * Created: 2021-01-19
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

//get
router.get('/api/get', (req, res) => {
    res.send('Path: /api/get');
});

router.get('/api/get/dashboard', (req, res) => {
    res.send('Path: /api/get/dashboard');
});

router.get('/api/get/user', (req, res) => {
    res.send('Path: /api/get/user');
});

router.get('/api/get/project', (req, res) => {
    res.send('Path: /api/get/project');
});

router.get('/api/get/project/status', (req, res) => {
    res.send('Path: /api/get/project/status');
});

router.get('/api/get/project/nodes', (req, res) => {
    res.send('Path: /api/get/project/nodes');
});

router.get('/api/get/project/tasks', (req, res) => {
    res.send('Path: /api/get/project/tasks');
});

//add
router.get('/api/add', (req, res) => {
  res.send('Path: /api/add');
});

router.get('/api/add/project', (req, res) => {
  res.send('Path: /api/add/project');
});

router.get('/api/add/node', (req, res) => {
  res.send('Path: /api/add/node');
});

//remove
router.send('/api/remove', (req, res) => {
  res.send('Path: /api/remove');
});

router.send('/api/remove/project', (req, res) => {
  res.send('Path: /api/remove/project');
});

router.send('/api/remove/node', (req, res) => {
  res.send('Path: /api/remove/node');
});

router.send('/api/remove/task', (req, res) => {
  res.send('Path: /api/remove/task');
});

router.get('/api/add/task', (req, res) => {
  res.send('Path: /api/add/task');
});

router.get('/api/get/dashboard', (req, res) => {
	var requestedProjectCount = req.body.maxProjectCount || 20;	//TODO Confirm JSON value key
	
    mongodb.getDashboard( //TODO Write in mongo module
        {
        username: req.body.username || req.body.email,
        maxProjectCount: requestedProjectCount
        },
        (result) => {
        success = result.success;
		
		var user = {}; //TODO Define User object
		var project = {}; //TODO Define Project object/array

        var jsonResponse = {
            'request': req.body,
            'success': success,
			'user': user,
			'project': project
        };
        
        res.json(jsonResponse);
        }
    );
	
    res.send('Path: /api/get/dashboard');
	
	//TODO Return User's Project Categories (and Categories' top x projects)
});

//auth
router.post('/api/auth/register', (req, res) => {
    var regStatus = false;

    //register user in DB
    mongodb.registerUser(
        {
        username: req.body.username || null,
        email: req.body.email,
        password: req.body.password
        },
        (result) => {
        regStatus = (result.insertedCount == 1);
        console.log(result.insertedId || "Insert operation failed");

        req.body.password = null;
        
        var jsonResponse = {
            'request': req.body,
            'success': regStatus
        };
        
        res.json(jsonResponse);
        }
    );
});
  
router.post('/api/auth/login', (req, res) => {
    var authStatus = false;

    //authenticate user with DB
    mongodb.authenticateUser(
        {
        username: req.body.username || req.body.email,
        password: req.body.password
        },
        (result) => {
        authStatus = result;
        
        req.body.password = null;

        var jsonResponse = {
            'request': req.body,
            'success': authStatus,
            'token': '?'+req.body.username //TODO issue an actual auth token //express session?
        };
        
        res.json(jsonResponse);
        }
    );
});

module.exports = router;