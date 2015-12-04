(function(){
	var keystone = require('keystone'),
		Country = keystone.list('Country'),
		StakeholderCategory = keystone.list('StakeholderCategory'),
		FunctionalArea = keystone.list('FunctionalArea'),
		InitiativeCategory = keystone.list('InitiativeCategory');

		exports = module.exports = function(req, res) {

		var view = new keystone.View(req, res),
			locals = res.locals;
			locals.data = {};
			locals.view = 'home';
		//Get the countries from the database to populate dropdown menu on registration form
		view.on('init', function(next) {
			Country.model.find().where("state", "published").exec(function (err, countries) {
				locals.data.countries = countries;
				next(err);
			});
		});
		//Get the stakeholder categories from the database 
		//to populate dropdown menu on registration form
		view.on('init', function(next) {
			StakeholderCategory.model
						.find()
						.where("state", "published")
						.exec(function (err, stakeholders) {
							locals.data.cats_stakeholders = stakeholders;
							next(err);
			});
		});
		//Retrieve from the database initiative categories
		//to populate the dropdown menu on the initiative registration form. 	
		view.on('init', function(next) {
			InitiativeCategory.model
				.find()
				.where("state", "published")
				.exec(function (err, initiatives) {
					locals.data.cats_initiatives = initiatives;
					next(err);
				});
		});
		//Get the functional areas from the database to populate
		// dropdown menu or registration form
		view.on('init', function(next) {
			FunctionalArea.model
						.find()
						.where("state", "published")
						.exec(function (err, areas) {
				locals.data.func_areas = areas;
				next(err);
			});
		});	

		view.render('index');
	}
})();
