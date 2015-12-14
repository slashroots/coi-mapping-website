/**
 * Created by tremaine on 12/11/15.
 */
(function(){
	var keystone = require('keystone'),
		Country = keystone.list('Country'),
		Stakeholder = keystone.list('Stakeholder'),
		common = require('../common/common'),
		ObjectId = require('mongoose').Types.ObjectId;
		
	
	exports.index = function(req, res){
		//Country.model.findOne()
		//	.where('name', 'Global')
		//	.exec(function(err, country){
		//		if(err) common.handleDBError(err, res);
		//	
		//		console.log(country);
			Stakeholder.model.find({country: "565b59aa7631649209bc2058"})
				//.where('country', country.id) Returns a string representing the ObjectId
				//.where('country', country._id) //Returns an object of type ObjectId
				//.where('country.name', 'Global')
				.populate('country')
				.exec(function(err, stake){
				
				if(err) common.handleDBError(err, res);
    
				res.json(stake);
			});			
		//});		
	};
})();

