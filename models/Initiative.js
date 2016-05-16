(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Initiative = new keystone.List('Initiative',{
			map: { name: 'name' },
			autokey: { path: 'slug', from: 'name', unique: true }
		});

	Initiative.add({
		name: {type: String, initial: true, required: true},
		name_lower: {type: String, index: true, hidden: true},
		category: {type: Types.Relationship, ref: 'InitiativeCategory'},
		organizer: {type: Types.Relationship, ref: 'Organizer', many: true},
		country: {type: Types.Relationship, ref: 'Country'},
		url: {type: Types.Url},
		date: {type: String},
		description: {type: String},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft', required: true},
		createdAt: { type: Date, default: Date.now, noedit: true}
	});

	//Converts the name of the initiative to lower case. 
	//This field will assist in searching for an initiative.
	Initiative.schema.pre('save', function(next){
		this.name_lower = this.name.toLowerCase();
		next();
	});

	Initiative.defaultColumns = 'name,type,state';
	Initiative.register();
})();
