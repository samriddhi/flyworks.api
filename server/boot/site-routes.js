module.exports = function(app) {
	var router = app.loopback.Router();
	var data = {
		title: 'Flyworks Media'
	};
	router.get("/", function(req, res) {
		res.render(app.get('indexFile'), data);
	});
	app.use(router);
}
