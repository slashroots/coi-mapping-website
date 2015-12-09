(function(){
	var keystone = require('keystone'),
		middleware = require('./middleware'),
		importRoutes = keystone.importer(__dirname);

// Common Middleware
	keystone.pre('routes', middleware.initLocals);
	keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
	var routes = {
		views: importRoutes('./views'),
		api: importRoutes('./api')
	};
	exports = module.exports = function(app) {
		/**
		 * Views
		 */
		app.get('/', routes.views.index);
		/**
		 * Renders map
		 */
		app.get('/map', routes.views.map);
		/**
		 * API Endpoints
		 */
		/**
		 * Stakeholders
		 */
		app.get('/stakeholders', routes.api.stakeholder.index);
		app.post('/stakeholders', routes.api.stakeholder.create);
		/**
		 * Countries
		 */
		app.get('/countries', routes.api.country.index);
		/**
		 * Stakeholder Registration
		 */
		app.get('/register', routes.views.register);
		/**
		 * Categories
		 */
		app.get('/categories', routes.api.category.index);
		/**
		 * Search
		 */
		app.get('/search', routes.api.search.search);
		/**
		 * Statistics
		 */
		app.get('/stats', routes.api.stats.index);
		/**
		 * Initiatives
		 */
		app.post('/initiatives', routes.api.initiative.create);
		app.get('/initiatives', routes.api.initiative.index);
		/**
		 * Organizers
		 */
		app.post('/organizers', routes.api.organizer.create);
	};
})();

