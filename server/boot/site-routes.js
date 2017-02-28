'use strict';
module.exports = function(app) {
	  var router = app.loopback.Router();
	  router.get('/', function(req, res) {
		  res.render(app.get('indexFile'));
	});
	  app.use(router);
};

