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
	//Initiatives
 	app.get('/initiatives', routes.api.initiative.index);
	// Industry
	app.get('/industries', routes.api.industry.index);
	 //Stakeholder
	app.get('/stakeholders', routes.api.stakeholder.index); 	

};
