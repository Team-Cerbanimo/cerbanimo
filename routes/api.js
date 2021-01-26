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
router.get('/get', (req, res) => {
    res.send('Path: /api/get');
});

router.get('/get/dashboard', (req, res) => {
    res.send('Path: /api/get/dashboard');
});

router.get('/get/user', (req, res) => {
    res.send('Path: /api/get/user');
});

router.get('/get/project', (req, res) => {
    res.send('Path: /api/get/project');
});

router.get('/get/project/status', (req, res) => {
    res.send('Path: /api/get/project/status');
});

router.get('/get/project/nodes', (req, res) => {
    res.send('Path: /api/get/project/nodes');
});

router.get('/get/project/tasks', (req, res) => {
    res.send('Path: /api/get/project/tasks');
});

//add
router.get('/add', (req, res) => {
  res.send('Path: /api/add');
});

router.get('/add/project', (req, res) => {
  res.send('Path: /api/add/project');
});

router.get('/add/node', (req, res) => {
  res.send('Path: /api/add/node');
});

//remove
router.get('/remove', (req, res) => {
  res.send('Path: /api/remove');
});

router.get('/remove/project', (req, res) => {
  res.send('Path: /api/remove/project');
});

router.get('/remove/node', (req, res) => {
  res.send('Path: /api/remove/node');
});

router.get('/remove/task', (req, res) => {
  res.send('Path: /api/remove/task');
});

router.get('/add/task', (req, res) => {
  res.send('Path: /api/add/task');
});

router.get('/get/dashboard', (req, res) => {
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
router.post('/auth/register', (req, res) => {
    var regStatus = false;

    //register user in DB
    mongodb.registerUser(
        {
        username: req.body.username || null,
        email: req.body.email,
        password: req.body.password
        },
        (result) => {
            let jsonResponse = {};

            if(result.error){
                jsonResponse = {
                    'success': false,
                    'errmsg': result.errmsg
                };
            } else {
                regStatus = (result.insertedCount == 1);
                console.log(result.insertedId || "Insert operation failed");

                req.body.password = null;
                
                jsonResponse = {
                    'request': req.body,
                    'success': regStatus
                };
            }
            
            res.json(jsonResponse);
        }
    );
});
  
router.post('/auth/login', (req, res) => {
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