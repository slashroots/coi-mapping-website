(function(){
	var keystone = require('keystone'),
		Stakeholder = keystone.list('Stakeholder'),
		Country = keystone.list('Country'),
		Initiative = keystone.list('Initiative'),
		common = require('../common/common');
	/**
	 * Count and return published stakeholders, initiatives and countries.
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		var query = {'state': 'published'};
		Country.model.find(query).count().exec(function(err, country){
			if(err || !country) common.handleDBError(err, res);

			Stakeholder.model.find(query).count().exec(function(err, stakeholder){
				if(err || !stakeholder) common.handleDBError(err, res);
				
				Initiative.model.find(query).count().exec(function(err, initiative){
					if(err || !initiative) common.handleDBError(err, res);
					
					var stats = {};
					if(country > 0) stats.countries = country;
					if(stakeholder > 0) stats.stakeholders = stakeholder;
					if(initiative > 0) stats.initiatives = initiative;

					res.json(stats);
				});
			});
		});
	}
})();