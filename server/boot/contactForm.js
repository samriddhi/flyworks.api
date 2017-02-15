module.exports = function(app) {
    var request = require("request");
    app.post('/submit', function(req, res) {
        var formData = {
            "url": "google.com",
            "title": "VIDEO!22222",
            "description": "dddddddddddddddddd",
            "userId": "1111111111111",
            "createdDate": "2017-02-15T19:31:07.031Z",
            "modifiedTime": "2017-02-15T19:31:07.031Z"            
        }
        console.log("form submitted at server");
        console.log(req.body);
        request.post({
            url: 'http://0.0.0.0:4000/api/videos',
            form: formData
        }, function(err, httpResponse, body) {
        	console.log('response returned');
        });

    });
};