(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Organizer = new keystone.List('Organizer');

	Organizer.add({
		name: {type: String},
		text: {type:String},
		value: {type:String}
	});

	Organizer.defaultColumns = 'name';
	Organizer.register();
})();
