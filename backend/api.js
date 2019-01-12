module.exports = function (app, db) {

    app.get('/getValues', function (req, response) {
        let group = req.query.group;
        db.collection("mainDB").find({GROUP:  new RegExp(group)}).toArray (function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        });
    })
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

    app.post('/createValue', function (req, response) {
        db.collection("mainDB").insertOne(req.body, null, function (err, docs) {
            response.status(200);
            response.send(JSON.stringify(docs))
        })
    })
}