var marker = null;

var stakeholdersToggle = true; //if false it shows initiatives

var bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = false;

var jamaicaToggle, regionalToggle, globalToggle, barbadosToggle, bahamasToggle, cubaToggle, haitiToggle, anguillaToggle, grenadaToggle, montserratToggle, saintluciaToggle, saintvincentToggle, trinidadToggle, dominicaToggle, antiguaToggle, saintkittsToggle, belizeToggle, guyanaToggle, surinameToggle, dominicanToggle = false;

var countriesDrawnArray = {}; //associative array used to keep track of the individual countries that have stakeholders rendered

var stakeholderCount = 0;

var globalCount = 0;

var regionalCount = 0;

var globalInitiativeCount = 0;

var regionalInitiativeCount = 0;

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

function countryNameParse (cname) {

	if (cname.split(" ")[0] == 'saint') cname = cname.split(" ")[0]+cname.split(" ")[1];

	else if (cname.split(" ")[1] == 'and') cname = cname.split(" ")[0];
	
	else cname = cname.split(" ")[0];
	
	return cname.toLowerCase();
	
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

			$('#countries').text(Object.keys(countriesDrawnArray).length - 1);

		}

	});
	
	//initiatives now

	ajax_url = "placeholder";

	if (search == '') ajax_url = "/initiatives";

	else ajax_url = "/search?q=" + search;

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

				date = data.stakeholders[i].date;

				latitude = data.stakeholders[i].country.latitude;

				longitude = data.stakeholders[i].country.longitude;

				id = data.stakeholders[i].id;

				plotCountryInitiative(id, country, name, type, url, date, size, latitude, longitude);

			}

			putLayersOnMap();

			$('#stakeholders').text(stakeholderCount);

			$('#regional').text(regionalCount);

			$('#global').text(globalCount);

			$('#countries').text(Object.keys(countriesDrawnArray).length - 1);

		}

	});

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {

	marker = L.marker(new L.LatLng(latitude, longitude), {
		
		});

			marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Organization Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(countryNameParse(country.toLowerCase()))) {

				countriesDrawnArray[country] = true;

				if (country == 'Regional') regionalCount++;
				
				else if (country == 'Global') globalCount++;
				
				else stakeholderCount++;

				window[countryNameParse(country.toLowerCase()) + 'PopupText'] += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				window[countryNameParse(country.toLowerCase())].addLayer(marker);

			}

}

function plotCountryInitiative (id, country, name, type, url, date, size, latitude, longitude) {
	
	//alert("Init!");

	marker = L.marker(new L.LatLng(latitude, longitude), {

	});

	marker.bindPopup("<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;margin-bottom:5px;'>Initiative Details</p></b><b><span style='color:#0078A8'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Year : </b>" + date);

	if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(countryNameParse(country.toLowerCase()))) {

		countriesDrawnArray[country] = true;

		if (country == 'Regional') regionalInitiativeCount++;

		else if (country == 'Global') globalInitiativeCount++;

		else stakeholderCount++;

		window[countryNameParse(country.toLowerCase()) + 'initiativesPopupText'] += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Date : </b>" + date + "</p></div>";

		window[countryNameParse(country.toLowerCase()) + "initiatives"].addLayer(marker);
		
		//alert(window[countryNameParse(country.toLowerCase()) + 'initiativesPopupText']);

	}

}
