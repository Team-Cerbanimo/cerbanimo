/**
 * mongo.js
 * MongoDB driver
 * Created: 2020-06-27
 */

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const bcrypt = require('bcrypt');

require('dotenv').config();

const dbName = 'Cerbanimo';

const client = new MongoClient(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });


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

        const usersCollection = db.collection('users');

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

        const usersCollection = db.collection('users');

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

//get user
const getUser = (userInfo, callback) => {
    let user = {
        username: userInfo.username || userInfo.email
    };

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('users');

        usersCollection.findOne(user, { projection: {hash: 0} }, (err, result) => {
            assert.equal(err, null);

            callback(result);
        });
    });
};

//get project
const getProjectsByCategory = (request, callback) => {
    let categoryCount = request.categories.length;
    let projectArray = new Array(categoryCount);

    let getNextCategory = (x, callback) => {
        if(x < categoryCount) {
            console.log(x);
            ensureConnection(function(err) {
                assert.equal(null, err);
            
                const db = client.db(dbName);
        
                const projectsCollection = db.collection('projects');

                let projectQuery = {
                    'category': request.categories[x]
                };
                console.log(projectQuery);
        
                projectsCollection.find({projectQuery}, {limit: request.maxProjectCount}, (err, result) => {
                    if(err) {
                        console.log(err.errmsg);
                    } else {
                        console.log(result.toArray());
                        projectArray[x] = {
                            category: request.categories[x],
                            topProjects: result.toArray()
                        };

                        getNextCategory(x+1, () => {
                            if(x == 0) {
                                callback(projectArray);
                            }
                        });
                    }
                });
            });
        }
    }

    getNextCategory(0);
};

//get dashboard
const getDashboard = (userInfo, callback) => {
    getUser(
        {username: userInfo.username, email: userInfo.email},
        (userResult) => {
            console.log(userResult);

            ensureConnection(function(err) {
                assert.equal(null, err);
            
                const db = client.db(dbName);
        
                const projectsCollection = db.collection('projects');
        
                getProjectsByCategory(
                    {categories: userResult.categories,
                    maxProjectCount: userInfo.maxProjectCount},
                    (projectResult) => {
                        let returnObj = {
                            'user': userResult,
                            'projects': projectResult,
                            'success': true
                        };
                        callback(returnObj);
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
exports.registerUser = registerUser;
exports.authenticateUser = authenticateUser;
exports.getDashboard = getDashboard;