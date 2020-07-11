/**
 * project.js
 * Cerbanimo API Backend - Project Routes
 * Created: 2020-07-11
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send('Path: /project');
});
  
router.get('/getstatus', (req, res) => {
    res.send('Path: /project/getstatus');
});
  
router.get('/getprojects', (req, res) => {
    res.send('Path: /project/getprojects');
});
  
router.get('/getnodes', (req, res) => {
    res.send('Path: /project/getnodes');
});
  
router.get('/gettasks', (req, res) => {
    res.send('Path: /project/gettasks');
});

module.exports = router;