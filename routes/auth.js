/**
 * auth.js
 * Cerbanimo API Backend - Authentication Routes
 * Created: 2020-07-11
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

//auth
router.get('/', (req, res) => {
    res.send('Path: /auth');
});

router.post('/register', (req, res) => {
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
  
router.post('/login', (req, res) => {
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
            'token': '?'+req.body.username //TODO issue an actual auth token
        };
        
        res.json(jsonResponse);
        }
    );
});

module.exports = router;