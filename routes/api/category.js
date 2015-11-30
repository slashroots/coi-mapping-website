(function(){
	var keystone = require('keystone'),
		StakeholderCategory = keystone.list('StakeholderCategory'),
		InitiativeCategory = keystone.list('InitiativeCategory'),
		common = require('../common/common');
	/**
	 * Get all categories. 
	 * @param  {[type]} req [description]
	 * @param  {[type]} res [description]
	 * @return {[type]}     [description]
	 */
	exports.index = function(req, res){
		switch(req.query.category){
			case 'initiative': getCategory('initiative', res);
				break;
			case 'stakeholder': getCategory('stakeholder', res);
				break;
			default: res.json({message: 'No category found'});
		}
	};
	/**
	 * Get a category by name. 
	 * @param  {[type]} category [description]
	 * @param  {[type]} res      [description]
	 * @return {[type]}          [description]
	 */
	var getCategory = function(category, res){
		var model_name = category.capitalizeFirstLetter() + 'Category';
			q = keystone.list(model_name).model.find().where('state', 'published');
			
			q.exec(function(err, result){
				if(err) common.handleDBError(err, res);
				res.json(result);
			});
	}
	/**
	 * Converts the first letter of a string to uppercase.
	 * @return {[type]} [description]
	 */
	String.prototype.capitalizeFirstLetter = function() {
    	return this.charAt(0).toUpperCase() + this.slice(1);
	}
})();