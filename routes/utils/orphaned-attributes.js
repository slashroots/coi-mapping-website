var keystone = require('keystone'),
	Initiative = keystone.list('Initiative'),
	Organization = keystone.list('Organizer'),
	common = require('../common/common');


/**
 * Firstly, I need a list of unique organizers.  This was
 * pulled from the existing collection (initiatives.json)
 */
var initiatives = require('./initiatives.json');
var org = "";
var unique_organizations = [];
function readOrganizers() {
	for(i in initiatives) {
		org = initiatives[i].organizer;
		if(org instanceof Array) {
			//do nothing
		} else {
			var organizer_names = org.split(', ');
			for(o in organizer_names) {
				addNewOrganization(organizer_names[o]);
			}
		}
	}
	return unique_organizations;
}
function addNewOrganization(item) {
	for(u in unique_organizations) {
		if(unique_organizations[u] == item) {
			return;
		}
	}
	unique_organizations.push(item);
}

/**
 * create the organizers next!
 * @param list
 */
function create_organizers(list) {
	for(o in list) {
		Organization.model({name: list[o]}).save();
	}
	
}

/**
 * create initiatives based on database dump
 */
function create_initiatives(callback) {
	Organization.model.find().exec(function(err, reference) {
		var new_initiatives = initiatives;
		for(i in initiatives) {
			var names = initiatives[i].organizer;
			if(names instanceof Array) {
				//do nothing
			} else {
				new_initiatives[i].organizer =
					organization_mapper(names.split(', '), reference);
			}
		}
		callback(new_initiatives);
	});
}

/**
 * Take in a list of organization names and return the 
 * associated ids
 * @param list
 */
function organization_mapper(list, reference) {
	var final_list = [];
	for (i in list) {
		for (r in reference) {
			if(reference[r].name == list[i]) {
				final_list.push(reference[r]._id);
			}
		}
	}
	return final_list;
}

/**
 * Save Cleaned initiatives
 */
function persist_information(initiatives) {
	for(i in initiatives) {
		delete initiatives[i]['_id'];
		Initiative.model(initiatives[i]).save(function(err, something) {
			console.log(err, something);
		});
	}
}
