module.exports = function(app) {
    var request = require("request");
    app.post('/submit', function(req, res) {
        var BaseUrl = "http://0.0.0.0:4000/api/";
        var url = BaseUrl + "queries";
        var userDetails = req.body.userDetails;
        var data = {
            "name": userDetails.name,
            "email": userDetails.email,
            "mobile": userDetails.mobile,
            "product": {},
            "message": userDetails.message,
            "Source": pageSource,            
            "created": "2017-02-26T18:40:06.681Z",                        
        }
        console.log("form submitted at server");
        request.post({
            url: url,
            form: data
        }, function(err, httpResponse, body) {
            console.log('response returned');
        });

    });
};