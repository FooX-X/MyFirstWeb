module.exports = function (app, db) {

    app.get('/getValues', function (req, response) {
        db.collection("mainDB").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })
    app.get('/getValues2', function (req, response) {
        db.collection("dropdownList").find({}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))

        });
    })

    app.post('/createValue', function (req, response) {
        db.collection("mainDB").insertOne(req.body, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
}