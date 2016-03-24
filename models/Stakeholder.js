(function(){
	var keystone = require('keystone'),
		Types = keystone.Field.Types,
		Stakeholder = new keystone.List('Stakeholder');

	Stakeholder.add({
		name: {type: String, initial: true, required: true},
		name_lower: {type: String, index: true, hidden: true},
		category: {type: Types.Relationship, ref: 'StakeholderCategory'},
		country: {type: Types.Relationship, ref: 'Country', index: true},
		functionalArea: {type: Types.Relationship, ref: 'FunctionalArea' },
		description: {type: String},
		url: {type: Types.Url},
		email: {type: Types.Email},
		founded: {type: String},
		size: {type: String},
		impact: {type: String},
		industry: {type: String},
		state: {type: Types.Select, options: 'draft, published, archived', default: 'draft'}//,
	});

	//Converts the title of the stakeholder to lower case. 
	//This field will assist in searching for a stakeholder.
	Stakeholder.schema.pre('save', function(next){
		this.name_lower = this.name.toLowerCase();
		next();
	});

	Stakeholder.defaultColumns = 'name,country,state';
	Stakeholder.register();
})();
