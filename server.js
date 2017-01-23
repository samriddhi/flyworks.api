const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
var db;
MongoClient.connect('mongodb://appUser:mongoTest@aws-us-west-2-portal.0.dblayer.com:15670,aws-us-west-2-portal.1.dblayer.com:15670/core-dev?ssl=true', (err, database) => {
    // ... start the server
    if (err) return console.log(err)
    db = database;

    app.listen(3001, () => {
        console.log('listening on 3001')
    })
})

app.get('/', (request, response) => {
    //do get for localhost:3000 here.
    response.sendFile(__dirname + '/views/index.html');
});

app.post('/test', (req, res) => {
    console.log(req.body);
    res.redirect('/')
});