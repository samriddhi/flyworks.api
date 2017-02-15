module.exports = function (app) {
	app.post('/submit', function (req, res) {
		console.log("form submitted at server");
		console.log(req.body);
	});
};