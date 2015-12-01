$(document).ready(function(){
	$('#message').hide();
	var formData = {};
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
	}

	$('#country').change(function(){
		if(validateSelect($(this), $('#country option:selected').val())){
			formData.country = $('#country option:selected').val();
			console.log(formData.country);
		}else{
			$(this).focus();
		}
	});

	$('#category').change(function(){
		if(validateSelect($(this), $('#category option:selected').val())){
			formData.category = $('#category option:selected').val();
			console.log(formData.category);
		}else{
			$(this).focus();
		}	
	});

	$('#functional_area').change(function(){
		if(validateSelect($(this), $('#functional_area option:selected').val())){
			formData.functionalArea = $('#functional_area option:selected').val();
			console.log(formData.functionalArea);
		}else{
			$(this).focus();
		}	
	});

	var pristine = function(){
		$('#email').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#description').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#name').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#url').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#category').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#country').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#functional_area').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
	}

	var validateSelect = function(element, value){
		var isValid = false;
		if(value != " "){
			element.parent().removeClass('has-error').addClass('has-success');
			isValid = true;
		}else{
			element.parent().removeClass('has-error').addClass('has-success');
		}	
	 return isValid;	
	}	
});