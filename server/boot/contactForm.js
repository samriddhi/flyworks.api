module.exports = function(app) {

    var request = require("request");
    var urlUtilities = require("../utilities/url")(app);

    app.post('/submit', function(req, res) {        
        var BaseUrl = urlUtilities.getRestApiBaseUrl();
        var queryRestApiUrl = BaseUrl + "queries";

        var userDetails = req.body.userDetails;
        var querySource = req.body.querySource;

        var data = {
            "name": userDetails.name,
            "email": userDetails.email,
            "mobile": userDetails.mobile,
            "videoIds": userDetails.videos,
            "message": userDetails.message,
            "Source": querySource,
            "created": new Date()
        }

        request.post({
            url: queryRestApiUrl,
            form: data
        }, function(err, httpResponse, body) {
            console.log('response returned');
        });

    });
};