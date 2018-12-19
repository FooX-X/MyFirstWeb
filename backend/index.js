const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var express = require('express')
var app = express()
var db = null;
var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use((req, res, next) => { //doesn't send response just adjusts it

    res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin

    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
        return res.status(200).json({});
    }
    next(); //so that other routes can take over

})

app.put('/updateValue', function (req, response) {
    const data = req.body
    db.collection("test").updateOne(data.whatToUpdate, {$set: data.newData}, null, function (err, docs) {
        response.status(200);
        response.send(JSON.stringify(docs))
    })
})

app.post('/createValue', function (req, response) {
    const data = req.body
    db.collection("test").insertOne(req.body, null, function (err, docs) {
        response.status(200);
        response.send(JSON.stringify(docs))
    })
})
app.get('/readValue', function (req, response) {
    const data = req.body
    db.collection("test").findOne(req.body, null, function (err, docs) {
        response.status(200);
        response.send(JSON.stringify(docs))
    })
})


// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db = client.db(dbName);
    app.listen(2000)
    //client.close();
});