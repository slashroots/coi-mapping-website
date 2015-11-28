(function(){
	var keystone = require('keystone'),
		Stakeholder = keystone.list('Stakeholder'),
		Initiative = keystone.list('Initiative');

	/**
	 * Get all countries
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.search = function(req, res){
		Stakeholder.model.find({"$text" : {"$search": req.query.q}}).exec(function(err, result){
				console.log(result);
		});
		res.end();
		// Country.model.find().exec(function(err, countries){
		// 	res.send(countries);
		// });
	};
})();