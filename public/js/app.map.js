$(document).ready(function(){
	$.ajax({
		url: '/stats',
		type: 'GET',
		success: function(data){
			displayStats(data);
		},
		error: function(){
			console.log('Error');
		}
	});

	$.ajax({
			url: '/countries',
			type: 'GET',
			success: function(data){
				displayCountryList(data);
			},
			error: function(){
				console.log('Error');
			}
	});

	$.ajax({
			url: '/categories?category=stakeholder',
			type: 'GET',
			success: function(data){
				// console.log(data);
				displayStakeholderCategoryList(data);
			},
			error: function(){
				console.log('Error');
			}
	});

	var displayStakeholderCategoryList = function(categories){
		var stakeholder_type_list = $('#entity-list'), i = 0, len = categories.length;
		for(;i<len;i++){
			stakeholder_type_list.append('<li><input checked type="checkbox" id="' + categories[i].name + '" class="type-boxes"><span>' + categories[i].name + '</span></li>');
		}
	}

	var displayCountryList = function(countries){
		var country_list = $('#country-list'), 
			i = 0, 
			len = countries.length;
		
		for (;i<len;i++){
			country_list.append('<li style="white-space: normal;"><input checked type="checkbox" class="country-boxes" id="' + (countries[i].name).toLowerCase() + '">' + countries[i].name + '</li>');
		}
	}

	var displayStats = function(stats){
		var stat_list = $('#stats');
		for (var stat in stats){
			if( stats.hasOwnProperty( stat ) ) {
    			stat_list.append('<li>'+ stat + ' : ' + stats[stat] + '</li>' );
  			} 
		}
	}

	$('#q').keyup(function(){
		if($('#q').val().length > 3){
			search($('#q').val());
		}
	});
	//Search Functionality
	var search = function(query){
		var search_url = '/search?q=' + query;
			$.ajax({
			url: search_url,
			type: 'GET',
			success: function(data){
				console.log(data);
			},
			error: function(){
				console.log('Error');
			}
		});
	}
});
