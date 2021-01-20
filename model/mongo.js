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

    //TODO check if user already exists

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const usersCollection = db.collection('users');

        usersCollection.insertOne(userToAdd, (err, result) => {
            assert.equal(err, null);
            console.log("Created new user successfully");
            callback(result);
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

        usersCollection.findOne(user, { projection: {password: 0} }, (err, result) => {
            assert.equal(err, null);

            callback(result);
        });
    });
};

//get dashboard
const getDashboard = (userInfo, callback) => {
    let userResult = getUser(userInfo.username);
	
	let projectQuery = {
		'users_id': userResult._id,
		'category': { $in: userResult.categories }
	};

    ensureConnection(function(err) {
        assert.equal(null, err);
    
        const db = client.db(dbName);

        const projectsCollection = db.collection('projects');

        projectsCollection.find(projectQuery, (err, result) => { //TODO Decide if it makes more sense to store user ID on Projects or vice versa
            assert.equal(err, null);
			
			returnObj = {
				'user': userResult,
				'projects': result
			};

            callback(result);
        }).limit(userInfo.maxProjectCount);
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