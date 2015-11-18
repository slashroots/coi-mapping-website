(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Initiative = new keystone.List('Initiative',{
			map: { name: 'title' },
			autokey: { path: 'slug', from: 'title', unique: true }
		});

	Initiative.add({
		title: {type: String, initial: true, required: true},
		type: {type: Types.Select,options: 'Hackaton, Summit, Conference', default: 'Conference', index: true},
		stakeholder: {type: Types.Relationship, ref: 'Stakeholder', index: true, many: true},
		country: {type: Types.Relationship, ref: 'Country', index: true},
		url: {type: Types.Url},
		date: {type: Types.Date},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft', required: true}
	});

	Initiative.defaultColumns = 'title,type,state';
	Initiative.register();
})();