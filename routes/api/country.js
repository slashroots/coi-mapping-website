(function(){
	var keystone = require('keystone'),
		Country = keystone.list('Country');
	/**
	 * Get all countries
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		Country.model.find().exec(function(err, countries){
			res.send(countries);
		});
	};
})();