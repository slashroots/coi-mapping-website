(function(){
	var keystone = require('keystone'),
		Stakeholder = keystone.list('Stakeholder'),
		Initiative = keystone.list('Initiative'),
		Country = keystone.list('Country'),
		common = require('../common/common');

	/**
	 * Get total count for each model within the database.
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		var stats = [];
		Stakeholder.model.find().where('state','published').count().exec(function(err, stakeholders){
			if(err) common.handleDBError(err, res); 

			Initiative.model.find().where('state','published').count().exec(function(err, initiatives){
				if(err) common.handleDBError(err, res); 

				Country.model.find().where('state', 'published').count().exec(function(err, countries){
						if(err) common.handleDBError(err, res); 					

						var stats = { 'stakeholders' : stakeholders,
									  'initiatives' : initiatives,
									  'countries' : countries
									};
						res.json(stats);
				});
			});
		});
	};
})();
