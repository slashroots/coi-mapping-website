/**
 * Created by tremaine on 12/11/15.
 */
(function(){
var keystone = require('keystone'),
	Country = keystone.list('Country'),
	Stakeholder = keystone.list('Stakeholder'),
	common = require('../common/common');
/**
 * 
 * @param req
 * @param res
 */
exports.index = function(req, res){
	if(req.query.type){
		
	}else{
		Country.model.find({"$or": [{name: 'Global'}, {name: 'Regional'}]})
			.where('state', 'published')
			.sort('name')
			.exec(function(err, region){
				if(err) common.handleDBError(err, res);				
				/**
				 * Get all global stakeholders
				 */
				Stakeholder.model
					.find()
					.count({country: region[0].id})
					.exec(function(err, global_stakes){
						if(err || !global_stakes) common.handleDBError(err, res);
						/**
						 * Get all regional stakeholders
						 */
						Stakeholder.model
							.find({country: region[1].id})
							.count()
							.exec(function(err, regional_stakes){
								if(err || !regional_stakes){
									common.handleDBError(err, res);
								}else{
									/**
									 * Get all country level stakeholders
									 */
									Stakeholder.model
											  .find()
												.count({"$and":
												[
													{country: { "$ne": region[0].id}},
													{country: { "$ne": region[1].id}}
												]
												}).exec(function(err, national){
													if(err || !national){
														common.handleDBError(err, res);								
													}else{
														/**
														 * Count all countries except Regional 
														 * and Global.
 														 */
														Country.model
															   .find()
																.count({"$and":
																	[
																		{name: {"$ne": 'Global'}},
																		{name: {"$ne": 'Regional'}}
																	]
																}).exec(function(err, country){
																	var stats = {};
																	stats.global = global_stakes;
																	stats.regional = regional_stakes;
																	stats.national = national;
																	stats.country = country;
																	res.json(stats);
														   });														     
													}
												});
									
								}
							})							
					});
		});
	}					
};
})();

