$(document).ready(function(){
	//TODO Refract code to handle better handle validation
	$('#message').hide();
	var formData = {},
		formInitiative = {};
	formInitiative.organizers = [];
	
	$('#name').focusout(function(){
		if($('#name').val().length < 3){
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}else{
			$(this).parent().removeClass('has-error').addClass('has-success');
			formData.name = $('#name').val();
		}
	});
	//TODO - To make the function better by sending an email
	//to the email address supplied. 
	$('#email').focusout(function(){
		if($('#email').val().length < 3){
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}else{
			$(this).parent().removeClass('has-error').addClass('has-success');
			formData.email = $('#email').val();
		}
	});

	$('#url').focusout(function(){
		if($('#url').val().length < 3){
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}else{
			$(this).parent().removeClass('has-error').addClass('has-success');
			formData.url = $('#url').val();
		}
	});

	$('#close').click(function(){
			pristine();
	});

	$('#submit').click(function(){		
		if(formData.name === "" || 
			formData.country === "" || 
				formData.category === "" || 
					 formData.email === "" || formData.functionalArea === "" ){
			$('#message').show();
		}else{
			$('#message').hide();
			formData.description = $('#description').val();
			submitForm(formData);
			formData = {}
		}
	});

	var submitForm = function(stakeholder){
		$.ajax({
    		url: '/stakeholders',
    		data: stakeholder,
    		type: 'POST',
    		success: function(data){
                   pristine();
                   $('#register').modal('hide'); 
                   $('#success').modal('show');					         
    		},
    		error: function(){
    			// $('#message').show();
    		}
    	});
	};

	var submitInit = function(initiative){
		$.ajax({
			url: '/initiatives',
			data: initiative,
			type: 'POST',
			success: function(data){
				pristine_init();
				$('#initiative').modal('hide');
				$('#success_init').modal('show');
			},
			error: function(){
				// $('#message').show();
			}
		});
	};

	$('#country').change(function(){
		if(validateSelect($(this), $('#country option:selected').val())){
			formData.country = $('#country option:selected').val();
		}else{
			$(this).focus();
		}
	});

	$('#category').change(function(){
		if(validateSelect($(this), $('#category option:selected').val())){
			formData.category = $('#category option:selected').val();
		}else{
			$(this).focus();
		}	
	});

	$('#functional_area').change(function(){
		if(validateSelect($(this), $('#functional_area option:selected').val())){
			formData.functionalArea = $('#functional_area option:selected').val();
		}else{
			$(this).focus();
		}	
	});

	//TODO - Consolidate both pristine functions.
	var pristine = function(){
		$('#email').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#description').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#name').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#url').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#category').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#country').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#functional_area').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
	};

	var pristine_init = function(){
		$('#url_initiative').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#description_initiative').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#name_initiative').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#category_initiative').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#country_initiative').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#year').prop('selectedIndex', 0).parent().removeClass('has-error').removeClass('has-success');
		$('#organizers').empty();
	};

	var validateSelect = function(element, value){
		var isValid = false;
		if(value != " "){
			element.parent().removeClass('has-error').addClass('has-success');
			isValid = true;
		}else{
			element.parent().removeClass('has-error').addClass('has-success');
		}	
	 return isValid;	
	};	
	/*
	* Initiative Form
	*/
	//Hide Organizer List/Table
	 $('#organizers').hide();
	$('#add-organizer').click(function(ev){		
		//increase list by 1 organizer
		ev.preventDefault();
		var organizer_name = $('#organizer'),
			organizers_tbl = $('#organizers');		
		//show organizers table
		if(organizer_name.val().length > 3){
			organizers_tbl.append('<tr><td>'+organizer_name.val()+'</td><td><button type="button" class="btn btn-default remove" value="'+organizer_name+'">Remove</button></td></tr>');
			organizers_tbl.show();
			organizer_name.val('');
		}		
	});
	/**
	 * Removes an organizer from the list.
	 */
	$('#organizers').on('click', 'button.remove', function(){
		$(this).closest('tr').remove();		
		if($('#organizers > tbody > tr').length === 0) $('#organizers').hide();
		return false;
	});
	
	$('#name_initiative').focusout(function(){
		var name = $('#name_initiative');
		if(name.val().length < 3 ){
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}else{
			$(this).parent().removeClass('has-error').addClass('has-success');
			formInitiative.name = name.val();
		} 			
	});
	
	$('#description_initiative').focusout(function(){
		var description = $('#description_initiative');	
		if(description.val().length > 3){
			formInitiative.description = description.val();
			$(this).parent().removeClass('has-error').addClass('has-success');
		}else{
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}	
	});
	
	var createOrganizers = function(){
		$('#organizers tr:gt(0)').each(function(){
			var organizer = {'name': $('td:first', $(this)).html()};
			$.ajax({
				url: '/organizers',
				data: organizer,
				type: 'POST',
				success: function(data){
					formInitiative.organizers.push(data._id);
				},
				error: function(){
					// $('#message').show();
				}
			});
		});
		submitInit(formInitiative);
	};
	
	$('#submit_initiative').click(function(){		
		createOrganizers();
	});
	
	$('#category_initiative').change(function(){		
		if(validateSelect($(this), $('#category_initiative option:selected').val())){
			formInitiative.category = $('#category_initiative option:selected').val();
		}else{
			$(this).focus();
		}
	});

	$('#country_initiative').change(function(){
		if(validateSelect($(this), $('#country_initiative option:selected').val())){
			formInitiative.country = $('#country_initiative option:selected').val();
		}else{
			$(this).focus();
		}
	});

	$('#year').change(function(){
		if(validateSelect($(this), $('#year option:selected').val())){
			formInitiative.date = $('#year option:selected').val();
		}else{
			$(this).focus();
		}
	});

	$('#url_initiative').focusout(function(){
		var url = $('#url_initiative');
		if(url.val().length > 3){
			formInitiative.url = url.val();
			$(this).parent().removeClass('has-error').addClass('has-success');
		}else{
			$(this).parent().removeClass('has-success').addClass('has-error');
			$(this).focus();
		}		
	});
	
});
