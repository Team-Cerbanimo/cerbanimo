/**
 * user.js
 * Cerbanimo API Backend - User Routes
 * Created: 2020-07-11
 */

var express = require('express');
var router = express.Router();

var mongodb = require('../model/mongo');

router.use((req, res, next) => {
    next();
});

router.get('/', (req, res) => {
    res.send('Path: /user');
});

module.exports = router;