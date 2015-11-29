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