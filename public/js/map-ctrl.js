var marker = null;

var bankArray = Array(0);

var govArray = Array(0);

var eduArray = Array(0);

var ngoArray = Array(0);

var ictArray = Array(0);

var mnoArray = Array(0);

var mediaArray = Array(0);

var bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = true;

//alert(bankArray[1]);

var iconShade = "http://www.argentmac.com/devca/icons/Aliz.jpg";

var preContent = "";
/**
 * Get statistics from database
 */
var getStats = function(search){
	$.ajax({
		url: '/stats',
		type: 'GET',
		success: function(data){
			displayStats(data, search);
		},
		error: function(){
			console.log('Error');
		}
	});
};
/**
 * Function call
 */
getStats(false);
/**
 * Updates the map statistics upon keypress.
 */
var updateStats = function(q){
	if(q === "" || q.length <= 1){
		getStats(false);
	}else{		
		$.ajax({
			type: 'GET',
			url: '/search?q=' + q,
			success: function(data){
				displayStats(data, true);
			},error: function(){
    			
			},complete: function(){
				q = "";
			}
		});
	}
};
/**
 * Displays the statistics of the map.
 * @param stats - Object containing the statistics of the map
 * @param search - Indicates whether a search operation was done.
 */
var displayStats = function(stats, search){
	if(!search){
		$('#countries').text(stats.Countries);
		$('#stakeholders').text(stats.Stakeholders);
	}else{
		$('#countries').text(stats.countries);
		$('#stakeholders').text(stats.stakeholder_count);
	}	
};

function getEverything (search) {
	
	var ajax_url = "placeholder";
	
	if (search == '') ajax_url = "/stakeholders";
	
	else ajax_url = "/search?q=" + search;

	var countries = [];

	$.ajax({

		type: "GET",

		url: ajax_url,

		dataType : "json",

		success : function (data) {		
			
			for(i = 0;i<data.stakeholders.length;i++){

				country = data.stakeholders[i].country.name;

				name = data.stakeholders[i].name;

				type = data.stakeholders[i].category.name;

				url = data.stakeholders[i].url;

				functional_area = data.stakeholders[i].functionalArea.name;

				latitude = data.stakeholders[i].country.latitude;

				longitude = data.stakeholders[i].country.longitude;

				id = data.stakeholders[i].id;

				plotCountry(id, country, name, type, url, functional_area, size, latitude, longitude);

			}
			
			putLayersOnMap();

		}

	});

	//alert(countries[4]);

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {

	iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Bank/Investment/Consulting") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Government") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Education/Research") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "NGO") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "ICT Services") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "MNO/Telecommunications") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Media/Marketing") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	switch (country) {

		case "Jamaica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			
			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br>Website : " + url + "<br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br>Type : " + type + "<br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),//sends stakeholder id

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});
			
			if (shouldTypeBeDrawn(type)) jamaica.addLayer(marker);

			break;

		case "Barbados" : marker = L.marker(new L.LatLng(latitude, longitude), {
			            								//title: title
		});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});


			if (shouldTypeBeDrawn(type)) barbados.addLayer(marker);

			break;

		case "Bahamas" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) bahamas.addLayer(marker);

			break;

		case "Cuba" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});


			if (shouldTypeBeDrawn(type)) cuba.addLayer(marker);

			break;

		case "Haiti" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) haiti.addLayer(marker);

			break;

		case "Anguilla" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) anguilla.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) grenada.addLayer(marker);

			break;

		case "Montserrat" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) montserrat.addLayer(marker);

			break;

		case "Saint Lucia" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) saintlucia.addLayer(marker);

			break;

		case "Saint Vincent" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) saintvincent.addLayer(marker);

			break;

		case "Dominica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) dominica.addLayer(marker);

			break;

		case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) antigua.addLayer(marker);

			break;

		case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) trinidad.addLayer(marker);

			break;

		case "Saint Kitts" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) saintkitts.addLayer(marker);

			break;

		case "Belize" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) belize.addLayer(marker);

			break;

		case "Guyana" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) guyana.addLayer(marker);

			break;

		case "Suriname" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) suriname.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) grenada.addLayer(marker);

			break;

		case "Global" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) globalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),//sends stakeholder id

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) global.addLayer(marker);

			break;

		case "Regional" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) regionalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

			marker.on('click', function () {

				preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

				$.ajax({

					type: "GET",

					url: encodeURI("http://localhost/stakeholdermap/public/initiativesJSON/" + id),//sends stakeholder id

					dataType : "json",

					success : function (data) {

						for(i = 0;i<data.results.length;i++){

							eventname = data.results[i].name;

							preContent = "" + preContent + "<br><b>" + (i + 1) + ".</b> " + eventname + " (" + data.results[i].pivot.type + ")<br><br>Year : " + data.results[i].date + "<br><br>Url : " + data.results[i].initiative_url + "<br>";

						}

						sidebar.show();

						$("#sidebar").html(preContent);

					}

				});


			});

			if (shouldTypeBeDrawn(type)) regional.addLayer(marker);

			break;


	}

	if (type == "Bank/Investment/Consulting") bankArray[bankArray.length] = marker;

	if (type == "Government") govArray[govArray.length] = marker;

	if (type == "Education/Research") eduArray[eduArray.length] = marker;

	if (type == "NGO") ngoArray[ngoArray.length] = marker;

	if (type == "ICT Services") ictArray[ictArray.length] = marker;

	if (type == "MNO/Telecommunications") mnoArray[mnoArray.length] = marker;

	if (type == "Media/Marketing") mediaArray[mediaArray.length] = marker;

	//

	//var markers = new L.MarkerClusterGroup();

}
