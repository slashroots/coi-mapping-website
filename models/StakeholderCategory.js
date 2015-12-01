(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		StakeholderCategory = new keystone.List('StakeholderCategory');
		
	StakeholderCategory.add({
		name: {type: String, initial: true, required: true, index: true},
		description: {type: String},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}
	});

	StakeholderCategory.defaultColumns = 'name,description,state';
	StakeholderCategory.register();
})();
