/**
 * Created by tremaine on 12/3/15.
 */
(function(){
	var keystone = require('keystone'),
		Organizer = keystone.list('Organizer'),
		common = require('../common/common');

	/**
	 * Get all Organizers
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		Organizer.model
			.find( { "name": { "$regex": req.query.search, "$options": "i" } },
			function(err,docs) {

			})
			//.where('state', 'published')
			//.populate('')
			.exec(function(err, organizers){
				
				for (var i = 0;i < organizers.length; i++) {

					organizers[i].text = organizers[i].name;

					organizers[i].value = organizers[i]["_id"];
					
				}
				
				console.log(organizers);
				
				if(err) common.handleDBError(err, res);
				res.json(organizers);
			});
	};
	
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
