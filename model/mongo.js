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


//test an insertion
const insertDocuments = function(db, callback) {
    // Get the collection
    const collection = db.collection('tyler-test');

    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into tyler-test collection");
      callback(result);
    });
}

//test a removal
const removeDocument = function(db, callback) {
    // Get the collection
    const collection = db.collection('tyler-test');

    // Delete document where a is 3
    collection.deleteOne({ a : 3 }, function(err, result) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Removed the document with the field a equal to 3");
      callback(result);
    });    
}

//test a find
const findDocument = function(db, callback) {
    // Get the collection
    const collection = db.collection('tyler-test');

    // Find document where a is 2
    collection.findOne({ a : 2 }, function(err, result) {
    assert.equal(err, null);
    console.log("Found the document with the field a equal to 2");
    callback(result);
    });    
}


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


//call ensure function with callback to run test based on switch-case
//TESTING ONLY
/*
ensureConnection(function(err) {
    assert.equal(null, err);

    const db = client.db(dbName);
    
    const mode = 5; //set mode for switch below

    switch(mode) {
        case 1:
            insertDocuments(db, function() {
                return;
            });
            break;

        case 2:
            removeDocument(db, function() {
                return;
            });
            break;

        case 3:
            findDocument(db, function(res) {
                console.log(res);
                return;
            });
            break;

        default:
            console.log("Not using MongoDB for this session, disconnected");
            client.close();
    }
});
*/

exports.mongoClient = client;
exports.registerUser = registerUser;
exports.authenticateUser = authenticateUser;