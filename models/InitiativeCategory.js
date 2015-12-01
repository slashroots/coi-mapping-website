(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		InitiativeCategory = new keystone.List('InitiativeCategory');

	InitiativeCategory.add({
		name: {type: String, initial: true, required: true},
		description: {type: String},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft', required: true}
	});

	InitiativeCategory.defaultColumns = 'name,description,state';
	InitiativeCategory.register();
})();