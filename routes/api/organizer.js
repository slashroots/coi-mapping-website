/**
 * Created by tremaine on 12/3/15.
 */
(function(){
	var keystone = require('keystone'),
		Organizer = keystone.list('Organizer'),
		common = require('../common/common');
	/**
	 * Creates an organizer from the request body.
	 * @param req
	 * @param res
	 */
	exports.create = function(req, res){
		Organizer.model(req.body).save(function(err, organizer){
			if(err){
				common.handleDBError(err, res);
			}else{
				res.json(organizer);
			}
		});		
	};
})();
