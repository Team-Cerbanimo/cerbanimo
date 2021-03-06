/**
 * mongo.js
 * MongoDB driver
 * Created: 2020-06-27
 */

const MongoClient = require('mongodb').MongoClient;
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const assert = require('assert');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const bcrypt = require('bcrypt');

require('dotenv').config();

const dbName = 'Cerbanimo';

//initialize session store
var sessionStore = new MongoDBStore({
  uri: process.env.DB_CONNECTION || null,
  databaseName: dbName,
  collection: 'UserSession',
  connectionOptions: { useNewUrlParser: true, useUnifiedTopology: true }
},
(err) => {
  if(err)  console.log(err);
});

sessionStore.on('error', function(error) {
  console.log(error);
});

const client = new MongoClient(process.env.DB_CONNECTION || null, { useNewUrlParser: true, useUnifiedTopology: true });


//register a user
const registerUser = (userInfo, callback) => {
    let pHash = bcrypt.hashSync(userInfo.password, 10);

    let userToAdd = {
        username: userInfo.username || userInfo.email,
        email: userInfo.email,
        hash: pHash
    };

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('User');

        usersCollection.insertOne(userToAdd, (err, result) => {
            let callbackResult = result; //default response object to be result
            
            //check for error and handle
            if(err) {
                if(err.errmsg.indexOf("E11000") >= 0) {
                    let problemField = "UNKNOWN FIELD";
                    if(err.keyValue.email) {
                        problemField = "email";
                    } else if(err.keyValue.username) {
                        problemField = "username";
                    }

                    callbackResult = {
                        error: true,
                        errmsg: `Oops! That ${problemField} is already in use.`
                    };
                } else {
                    callbackResult = err;
                }
            }
            
            //return either custom error response or result object
            callback(callbackResult);
        });
    });
};

//authenticate a user
const authenticateUser = (userInfo, callback) => {
    let userToAuth = {
        username: userInfo.username || userInfo.email
    };

    let authStatus = false;

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('User');

        usersCollection.findOne(userToAuth, (err, result) => {
            assert.equal(err, null);
            
            if(bcrypt.compareSync(userInfo.password, result.hash)) {
                authStatus = true;
            } else {
                authStatus = false;
            }

            callback(authStatus);
        });
    });
};

//logout a user
const logoutUser = (userInfo, callback) => {
    let userToLogout = {
        username: userInfo.username || userInfo.email,
        sessionID: userInfo.sessionID
    };

    let updates = { $set: {isAuthenticated: false}, $unset: {sessionID: ""} };

    let success = false;

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('User');

        usersCollection.findOneAndUpdate(userToLogout, updates, (err, result) => {
            if(err) {
                console.log(err);
            } else {
                success = true;
            }

            callback(success);
        });
    });
};

//update user auth status
const updateUserAuthStatus = (userInfo, callback) => {
    let userToUpdate = {
        username: userInfo.username || userInfo.email
    };

    let updates = {};
    if(userInfo.authStatus) {
        updates = { $set: {isAuthenticated: true, sessionID: userInfo.sessionID} };
    } else {
        updates = { $set: {isAuthenticated: false}, $unset: {sessionID: ""} };
    }

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('User');

        usersCollection.updateOne(userToUpdate, updates, (err, result) => {
            let callbackResult = result; //default response object to be result
            
            //check for error and handle
            if(err) {
                callbackResult = err;
            }
            
            //return either custom error response or result object
            callback(callbackResult);
        });
    });
};

//get user
const getUser = (userInfo, callback) => {
    let user = {
        username: userInfo.username || userInfo.email
    };

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('User');

        usersCollection.findOne(user, { projection: {hash: 0} }, (err, result) => {
            assert.equal(err, null);

            callback(result);
        });
    });
};

//get projects by category
const getProjectsByCategory = (request, callback) => {
    ensureConnection(async function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const projectsCollection = db.collection('Project');

        let projectQuery = {
            categories: { $in: request.categories }
        };
        let order = { categories: 1 };
        let projects = await projectsCollection.find(projectQuery, {limit: request.maxProjectCount}).sort(order).toArray();

        callback({
            categories: request.categories,
            projects: projects,
            err: null
        });
    });
};

//get dashboard
const getDashboard = (userInfo, callback) => {
    getUser(
        {username: userInfo.username, email: userInfo.email},
        (userResult) => {
            ensureConnection(function(err) {
                assert.equal(null, err);
            
                const db = client.db(dbName);
        
                const projectsCollection = db.collection('Project');
        
                getProjectsByCategory(
                    {categories: userResult.categories,
                    maxProjectCount: userInfo.maxProjectCount},
                    (projectResult) => {
                        if(projectResult.err) {
                            callback({
                                'user': userResult || null,
                                'projects': null,
                                'success': false,
                                'err': err
                            });
                        } else if(projectResult.projects) {
                            callback({
                                'user': userResult,
                                'projects': projectResult.projects,
                                'success': true,
                                'err': null
                            });
                        } else {
                            callback({
                                'user': userResult || null,
                                'projects': null,
                                'success': true,
                                'err': null
                            });
                        }
                });
            });
    });
};

//validate there is a connection and execute the callback function
const ensureConnection = (callback) => {
    if(!client.isConnected()) {
        console.log('MongoDB is not connected, attempting to connect now...');
        try {
            client.connect(function(err) {
                assert.equal(null,err);
                console.log('Connected successfully to MongoDB server');
                callback();
            });
        } catch(err) {
            console.log('Could not connect to MongoDB server');
            callback(err);
        }
    } else {
        console.log('Already connected to MongoDB server');
        callback();
    }
};

exports.mongoClient = client;
exports.sessionStore = sessionStore;
exports.registerUser = registerUser;
exports.authenticateUser = authenticateUser;
exports.logoutUser = logoutUser;
exports.getDashboard = getDashboard;
exports.updateUserAuthStatus = updateUserAuthStatus;