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
		organizationType: {type: String, options: "Non-profit, For-profit, Developer group, Other", required: true, initial: true, default: 'Other'},
		firstName: {type: String, initial: true, required: true},
		lastName: {type: String, initial: true, required: true},
		title: {type: String, options: 'Mr, Mrs, Miss, Dr', default: 'Mr'},
		email: {type: Types.Email, required: true, initial: true},
		phone: {type: String},
		description: {type: String},
		url: {type: Types.Url},
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
