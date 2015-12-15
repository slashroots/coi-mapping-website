(function(){
	var keystone = require('keystone'),
		Initiative = keystone.list('Initiative'),
		Stakeholder = keystone.list('Stakeholder'),
		common = require('../common/common');
	/**
	 * Search the database for initiatives and stakeholders.
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.search = function(req, res){
		if(req.query.q){
			var term = new RegExp(req.query.q.toLowerCase(), 'i');
			Stakeholder.model
				.find({'name_lower': {$regex: term}})
				.select('-name_lower')
				.populate('category country functionalArea')
				.exec(function(err, stakeholders){
					if(err || !stakeholders) common.handleDBError(err, res);

					Initiative.model
						.find({'name_lower' : {$regex: term}})
						.populate('category')
						.select('-name_lower -slug')
						.exec(function(err, initiatives){
							if(err || !initiatives) common.handleDBError(err, res);
							/**
							 * Get the distinct number of countries a stakeholder exists in.
							 */
							Stakeholder.model
								.find({'name_lower': {$regex: term}})
								.populate('category country functionalArea')
								.distinct('country')
								.exec(function(err, countries_count){
									if(err || !countries_count) common.handleDBError(err, res);

									var results = {};
									results.stakeholder_count = stakeholders.length;
									if(stakeholders.length > 0){
										results.stakeholders = stakeholders;
									}else{
										results.stakeholders = 0;
									}
									if(countries_count.length >= 0){
										results.countries = countries_count.length;
									}else{
										results.countries = 0;
									}
									res.json(results);
								});
						});
				});
		}else{
			//TODO - This should throw the appropriate HTTP Code.
			res.json({message: 'No search terms provided'});
		}
	};
})();
