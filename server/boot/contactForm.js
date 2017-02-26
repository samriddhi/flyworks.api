module.exports = function(app) {

    var request = require("request");

    app.post('/submit', function(req, res) {
        var BaseUrl = "http://0.0.0.0:4000/api/";
        var url = BaseUrl + "queries";

        var userDetails = req.body.userDetails;
        var pageInfo = req.body.pageInfo;

        var data = {
            "name": userDetails.name,
            "email": userDetails.email,
            "mobile": userDetails.mobile,
            "videoIds": userDetails.videos,
            "message": userDetails.message,
            "Source": pageInfo.source,
            "created": new Date()
        }

        request.post({
            url: url,
            form: data
        }, function(err, httpResponse, body) {
            console.log('response returned');
        });

    });
};