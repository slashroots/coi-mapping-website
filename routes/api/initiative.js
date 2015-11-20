(function(){
	var keystone = require('keystone'),
		Initiative = keystone.list('Initiative'),
		common = require('../common/common');
	/**
	 * Get all initiatives 
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		Initiative.model
			.find()
			.populate('stakeholder country')
			.exec(function(err, initiatives){
				var options = {
			      path: 'stakeholder.industry',
			      model: 'Industry'
    		   };
    		   Initiative.model.populate(initiatives, options, function (err, initiatives) {
      				options = {};
      				options = {
      					path: 'stakeholder.country',
      					model: 'Country'
      				};
      		   Initiative.model.populate(initiatives, options, function (err, initiatives) {
      					res.json(initiatives);      					
    				});
    			});
			});
	};
	/**
	 * [create description]
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.create = function(req, res){
		Initiative.model(req.body).save(function(err){
			if(err){
				common.handleDBError(err, res);
			}else{
				common.handleDBSuccess({'http_code': 200, 'name': 'Initiative'}, res);
			}
		});
	};
})();