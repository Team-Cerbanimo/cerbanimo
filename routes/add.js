/**
 * add.js
 * Cerbanimo API Backend - Add Routes
 * Created: 2020-07-11
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
  res.send('Path: /add');
});

router.get('/project', (req, res) => {
  res.send('Path: /add/project');
});

router.get('/node', (req, res) => {
  res.send('Path: /add/node');
});

router.get('/task', (req, res) => {
  res.send('Path: /add/task');
});

module.exports = router;