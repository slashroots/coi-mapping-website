/**
 * Created by tremaine on 3/11/16.
 */
(function(){
    var keystone = require('keystone'),
        Enquiry = keystone.list('Enquiry'),
        Country = keystone.list('Country'),
        InitiativeCategory = keystone.list('InitiativeCategory');

    exports = module.exports = function(req, res) {

        var view = new keystone.View(req, res);
        var locals = res.locals;
        locals.data = {};
        locals.view = 'home';
        //Retrieve initiative categories from database
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
        //Get the countries from the database to populate dropdown menu on registration form
        view.on('init', function(next) {
            Country.model.find().where("state", "published").exec(function (err, countries) {
                locals.data.countries = countries;
                next(err);
            });
        });

        view.render('init_form');

    };
})();

