module.exports = function(app) {

    var request = require("request");
    var urlUtilities = require("../utilities/url")(app);

    app.post('/submit', function(req, res) {
        var BaseUrl = urlUtilities.getRestApiBaseUrl();
        var queryApiUrl = BaseUrl + "/queries";
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
            url: queryApiUrl,
            form: data
        }, function(err, response, body) {
            if (!err && response.statusCode === 200) {
                //Sending data back to Ajax 
                res.end(body);
            }
        });

    });
};