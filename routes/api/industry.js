(function(){
	var keystone = require('keystone'),
		Industry = keystone.list('Industry');
	/**
	 * Get all Industries 
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		Industry.model.find().exec(function(err, industries){
			res.send(industries);
		});
	};
})();