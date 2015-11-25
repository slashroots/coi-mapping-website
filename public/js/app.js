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

	$('#register').click(function(){		
		if(formData.name === "" || formData.country === "" || formData.industry === "" || formData.url === ""){
			$('#message').show();
		}else{
			$('#message').hide();
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
    		},
    		error: function(){
    			// $('#message').show();
    		}
    	});
	}

	$('#country').change(function(){
		if(validateSelect($(this), $('#country option:selected').val())){
			formData.country = $('#country option:selected').val();
		}else{
			$(this).focus();
		}
	});

	$('#industry').change(function(){
		if(validateSelect($(this), $('#industry option:selected').val())){
			formData.industry = $('#industry option:selected').val();
		}else{
			$(this).focus();
		}	
	});

	var pristine = function(){
		$('#name').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#url').val('').parent().removeClass('has-error').removeClass('has-success');
		$('#industry').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
		$('#country').prop('selectedIndex',0).parent().removeClass('has-error').removeClass('has-success');
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