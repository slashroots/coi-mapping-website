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
		/**
		 * Get all stakeholders and count distinct countries
		 */
		Stakeholder.model.find()
						.where('state','published')
						.distinct('country')
						.exec(function(err, countries){
							if(err) common.handleDBError(err, res); 

						Initiative.model.find()
							.where('state','published')
							.count()
							.exec(function(err, initiatives){
								if(err) common.handleDBError(err, res); 
			
								Stakeholder.model.find()
												.where('state','published')
												.count()
												.exec(function(err, stakeholders){
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
