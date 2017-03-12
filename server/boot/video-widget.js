module.exports = function(app) {

    var request = require("request");
    var urlUtilities = require("../utilities/url")(app);
    app.get('/videos', function(req, res) {
        var BaseUrl = urlUtilities.getRestApiBaseUrl();
        var videoApiUrl = BaseUrl + "/videos";
        request(videoApiUrl).pipe(res);

    })
}