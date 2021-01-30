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

router.post('/get/dashboard', (req, res) => {
	let requestedProjectCount = req.body.maxProjectCount || 20;	//TODO Confirm JSON value key
	
    mongodb.getDashboard(
        {
        username: req.body.username || req.body.email,
        maxProjectCount: requestedProjectCount
        },
        (result) => {
            let success = result.success;
            let user = result.user;
            var projects = result.projects;

            var jsonResponse = {
                'request': req.body,
                'success': success,
                'user': user,
                'projects': projects
            };
            
            res.json(jsonResponse);
        }
    );
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

            if(authStatus) {
                (async () => {
                    let result = await mongodb.updateUserAuthStatus({
                        username: req.body.username,
                        email: req.body.email,
                        authStatus: true,
                        sessionID: req.sessionID},

                        (result) => {
                            console.log(result);
                    });
                })();
            }

            var jsonResponse = {
                'request': req.body,
                'success': authStatus,
                'session': (authStatus ? req.session : null)
            };
            
            res.json(jsonResponse);
        }
    );
});

router.post('/auth/logout', (req, res) => {
    var authStatus = false;

    //logout user by destroying session and removing any DB flags
    mongodb.logoutUser(
        {
            username: req.body.username || req.body.email,
            sessionID: req.sessionID
        },
        (result) => {
            let success = result;

            if(success) { //Document was updated successfully
                mongodb.sessionStore.destroy(req.sessionID, (err) => {
                    if(err) { //could not destroy session in DB
                        success = false;
                    } else {
                        req.session.destroy((err) => {
                            if(err) { //could not destroy client session
                                success = false;
                            }
            
                            res.json({
                                'request': req.body,
                                'success': success
                            });
                        });
                    }
                });
            } else {
                res.json({
                    'request': req.body,
                    'success': success
                });
            }
        }
    );
});

module.exports = router;