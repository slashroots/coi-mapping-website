/**
 * Created by Nick on 11/24/15.
 */

var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	
	var Country = keystone.list("Country");

	var Industry = keystone.list("Industry");
	
	var locals = res.locals;
	
	locals.data = {};
	
	locals.industryData = {};

	view.on('init', function(next) {

		Country.model.find().where("state", "published").exec(function (err, countries) {

			console.log(countries);
			
			locals.data.countries = countries;
			
			next(err);

		});


	});

	view.on('init', function(next) {

		Industry.model.find().where("state", "published").exec(function (err, industries) {

			console.log(industries);

			locals.data.industries = industries;

			next(err);

		});

	});	

	view.render('register');
		
}

