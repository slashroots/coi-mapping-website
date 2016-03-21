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
			.where('state', 'published')
			.populate('category country')
			.exec(function(err, initiatives){
			 	if(err) common.handleDBError(err, res);
				res.json({"stakeholders": initiatives});
			});
	};
	/**
	 * Creates an initiative from the request body.
	 * @param req
	 * @param res
	 */
	exports.create = function(req, res){
		Initiative.model(req.body).save(function(err){
			if(err){
				common.handleDBError(err, res);
			}else{
				common.handleDBSuccess({'http_code': 200, 'name': 'Initiaitve'}, res);
			}
		});
	};
})();
