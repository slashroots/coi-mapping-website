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
			.populate('category')
			.exec(function(err, initiatives){
			 	if(err) common.handleDBError(err, res);
			 	res.json(initiatives);
			});
	};
})();