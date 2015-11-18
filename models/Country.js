(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Country = new keystone.List('Country');

	Country.add({
		name: {type: String, initial: true, required: true, index: true},
		code: {type: String, initial: true, index: true, required: true},
		latitude: {type: String, initial: true, required: true},
		longitude: {type: String, initial: true, required: true},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}
	});

	Country.defaultColumns = 'name,description,state';
	Country.register();
})();