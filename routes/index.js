var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.all('/contact', routes.views.contact);
	//API Endpoints
	 //Stakeholder
	app.get('/stakeholders', routes.api.stakeholder.index); 
	app.post('/stakeholders', routes.api.stakeholder.create);	
	//Country
	app.get('/countries', routes.api.country.index);

	app.get('/register', routes.views.register);

	app.get('/map', routes.views.map);

	app.get('/categories', routes.api.category.index);

	app.get('/search', routes.api.search.search);

	app.get('/stats', routes.api.stats.index);
	
	app.post('/initiatives', routes.api.initiative.create);
	app.get('/initiatives', routes.api.initiative.index);
	
	app.post('/organizers', routes.api.organizer.create);

};
