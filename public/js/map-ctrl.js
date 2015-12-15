var marker = null;

var bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = false;

var jamaicaToggle, regionalToggle, globalToggle, barbadosToggle, bahamasToggle, cubaToggle, haitiToggle, anguillaToggle, grenadaToggle, montserratToggle, saintluciaToggle, saintvincentToggle, trinidadToggle, dominicaToggle, antiguaToggle, saintkittsToggle, belizeToggle, guyanaToggle, surinameToggle = false;

var countriesDrawnArray = {}; //associative array used to keep track of the individual countries that have stakeholders rendered

var stakeholderCount = 0;

var globalCount = 0;

var regionalCount = 0;

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
//getStats(false);
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
		$('#countries').text(stats.country);
		$('#national').text(stats.national);
		$('#regional').text(stats.regional);
		$('#global').text(stats.global);
	}else{
		$('#countries').text(stats.countries);
		$('#stakeholders').text(stats.stakeholder_count);
	}
};

function fixUrl (url) {
	
	if (url.indexOf('www') == 0) url = 'http://' + url;;
	
	return url;
	
}

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

			countriesDrawnArray = {};
			
			countriesDrawnArray['test'] = 0;
			
			stakeholderCount = globalCount = regionalCount = 0;

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

			$('#stakeholders').text(stakeholderCount);
			
			$('#regional').text(regionalCount);

			$('#global').text(globalCount);
			
			//alert(countriesDrawnArray);

			$('#countries').text(Object.keys(countriesDrawnArray).length - 1);

		}

	});

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {

	switch (country) {

		case "Jamaica" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				jamaica.addLayer(marker);

			}

			break;

		case "Barbados" : marker = L.marker(new L.LatLng(latitude, longitude), {
			//title: title
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				barbados.addLayer(marker);

			}

			break;

		case "Bahamas" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;
				
				stakeholderCount++;

				bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				bahamas.addLayer(marker);

			}

			break;

		case "Cuba" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				cuba.addLayer(marker);

			}

			break;

		case "Haiti" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				haiti.addLayer(marker);

			}

			break;

		case "Anguilla" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				anguilla.addLayer(marker);

			}

			break;

		case "Montserrat" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				montserrat.addLayer(marker);

			}

			break;

		case "Saint Lucia" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintlucia.addLayer(marker);

			}

			break;

		case "Saint Vincent" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintvincent.addLayer(marker);

			}

			break;

		case "Dominica" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				dominica.addLayer(marker);

			}

			break;

		case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				antigua.addLayer(marker);

			}

			break;

		case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				trinidad.addLayer(marker);

			}

			break;

		case "Saint Kitts" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintkitts.addLayer(marker);

			}

			break;

		case "Belize" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				belize.addLayer(marker);

			}

			break;

		case "Guyana" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				guyana.addLayer(marker);

			}

			break;

		case "Suriname" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				suriname.addLayer(marker);

			}

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				countriesDrawnArray[country] = true;

				stakeholderCount++;

				grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				grenada.addLayer(marker);

			}

			break;

		case "Global" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				globalCount++;

				globalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				global.addLayer(marker);

			}

			break;

		case "Regional" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(country)) {

				regionalCount++;

				regionalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				regional.addLayer(marker);

			}

			break;

	}

}
