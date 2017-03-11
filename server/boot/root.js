'use strict';

module.exports = function(server) {
    // Install a `/` route that returns server status
    var router = server.loopback.Router();
    //  router.get('/', server.loopback.status());
    server.use(router);

    server.all('/*', function (request, response, next) {
    	console.log('jjjjjj')
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "X-Requested-With");
        response.header("Access-Control-Allow-Methods", "GET, POST", "PUT", "DELETE");
        next();
    });


//    server.use(allowCrossDomain);
};
    // function allowCrossDomain (req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    //     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    //     if ('OPTIONS' === req.method) {
    //         res.send(200);
    //     } else {
    //         next();
    //     }
    // };