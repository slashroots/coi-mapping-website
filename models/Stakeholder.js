(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Stakeholder = new keystone.List('Stakeholder');

	Stakeholder.add({
		name: {type: String, initial: true, required: true, index: true},
		industry: {type: Types.Relationship, ref: 'Industry', index: true},
		url: {type: Types.Url},
		country: {type: Types.Relationship, ref: 'Country', index: true},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}//,
		//functional_area: {type: String, initial: true, required: true, index: true, default : 'None Specified'},
	});

	Stakeholder.defaultColumns = 'name,country,state';
	Stakeholder.register();
})();
