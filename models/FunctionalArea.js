(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		FunctionalArea = new keystone.List('FunctionalArea');

	FunctionalArea.add({
		name: {type: String, initial: true, required: true, index: true},
		description: {type: String},	
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}//,
	});

	FunctionalArea.defaultColumns = 'name,description,state';
	FunctionalArea.register();
})();
