var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res);
	var Country = keystone.list("Country");
	var Industry = keystone.list("Industry");
	var locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	locals.data = {};
	
	locals.industryData = {};
	view.on('init', function(next) {

		Country.model.find().where("state", "published").exec(function (err, countries) {

			locals.data.countries = countries;
			
			next(err);

		});


	});

	view.on('init', function(next) {

		Industry.model.find().where("state", "published").exec(function (err, industries) {

			locals.data.industries = industries;

			next(err);

		});

	});	
	
	// Render the view
	view.render('index');
	
};
