(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Industry = new keystone.List('Industry');

	Industry.add({
		name: {type: String, initial: true, required: true, index: true},
		description: {type: String, initial: true, required: true},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}
	});

	Industry.defaultColumns = 'name,description,state';
	Industry.register();
})();
