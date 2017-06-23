var School = require('../server/model/school');
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/home', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/schools', function(req, res) {
		School.find({}, function(err, schools){
			console.log(schools);
			res.send(JSON.stringify(schools));
		});
	});

	app.get('/school/register', function(req, res) {
		var newSchool = School({
			"_id" : 1,
        "name" : "Test School",
        "description" : "Test School description",
        "location" : "Test School location",
        "likes" : "10",
        "comments" : [
                "Test School comment-1",
                "Test School comment-1",
                "Test School comment-1"
        ]
		});

		newSchool.save(function(err){
			if(err)
				console.log("school could not be created!!!", err);
			else
			console.log("school created!!!");
		});
	});

};