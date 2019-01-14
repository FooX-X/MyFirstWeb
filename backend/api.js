const { ObjectID } = require('mongodb');

module.exports = function (app, db) {

    app.get('/getValues', function (req, response) {
        let group = req.query.group;
        const query = {GROUP:  new RegExp(group)};
        if (req.query.search) {
            query.NAME = new $RegExp(/^req.query.search/);
        }
        const limit = 500
        let skip = 2;

        if (req.query.skip) {
            skip = +req.query.skip;
        }

        db.collection("mainDB").find(query, {limit, skip}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })
    // app.get('/getValues', function (req, response) {
    //     let group = req.query.group;
    //     db.collection("mainDB").find({GROUP:  new RegExp(group)}).toArray (function (err, docs) {
    //         response.status(200);
    //         response.send(JSON.stringify(docs))
    //     });
    // })
    app.get('/getValuesGroup', function (req, response) {
        db.collection("Group").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))

        });
    })
    app.get('/getValuesLanguage', function (req, response) {
        db.collection("Language").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })
    app.post('/createValue', function (req, response) {
        const data = req.body
        db.collection("mainDB").insertOne(data, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
    app.put('/updateValue', function (req, response) {
        
        const query  = {_id: ObjectID(req.body._id)}
        const data = {...req.body};
        delete data._id;
        console.log('update', req.body, query._id.toString());
        db.collection("mainDB").updateOne(query, {$set: data}, function (err, docs) {
            if(err){
                console.error(err);
                response.status(404).send(err.toString());
            }
            
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
    app.delete('/deleteValue', function (req, response) {
        
        const query  = {_id: ObjectID(req.body._id)}
        console.log('update', req.body, query._id.toString());
        db.collection("mainDB").deleteOne(query, function (err, docs) {
            if(err){
                console.error(err);
                response.status(404).send(err.toString());
            }
            
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
}