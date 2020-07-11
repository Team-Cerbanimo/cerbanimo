/**
 * remove.js
 * Cerbanimo API Backend - Remove Routes
 * Created: 2020-07-11
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send('Path: /remove');
});
  
router.get('/project', (req, res) => {
    res.send('Path: /remove/project');
});
  
router.get('/node', (req, res) => {
    res.send('Path: /remove/node');
});
  
router.get('/task', (req, res) => {
    res.send('Path: /remove/task');
});

module.exports = router;