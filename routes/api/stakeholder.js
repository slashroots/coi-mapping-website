(function(){
	var keystone = require('keystone'),
		Stakeholder = keystone.list('Stakeholder');
	/**
	 * Get all Stakeholders 
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		Stakeholder.model
			.find()
			.populate('industry country')
			.exec(function(err, stakeholders){				  
				  res.json(stakeholders);     
    		});
		};
	/**
	 * Creates a new stakeholder from the request body.
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.create = function(req, res){
		Stakeholder.model(req.body).save(function(err){
			if(err){
				res.json(err);
			}else{
				res.json({message: 'Saved'});
			}
		});
	};
})();