/**
 * Created by Tremaine Buchanan (tremaine@slashroots.org)
 * 
 */
$(document).ready(function(){
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
	};

	var displayCountryList = function(countries){
		var country_list = $('#country-list'), 
			i = 0, 
			len = countries.length;
		
		for (;i<len;i++){
			country_list
				.append('<li style="white-space: normal;"><input checked type="checkbox" class="country-boxes" id="' + (countries[i].name).toLowerCase() + '">' + countries[i].name + '</li>');
		}
	};

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
