var marker = null;
var stakeholdersToggle = true; //if false it shows initiatives
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
 * Updates the map statistics upon keypress.
 */
var updateStats = function(q){
	
	if (stakeholdersToggle) searchType = "stakeholder";
	
	else searchType = "initiative";
	
	if(q === "" || q.length <= 1){
		getStats(false);
	}else{
		$.ajax({
			type: 'GET',
			url: '/search?q=' + encodeURIComponent(q) + '&type=' + searchType,
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

	if (search == '') ajax_url = "/stakeholders";
	
	else ajax_url = "/search?q=" + encodeURIComponent(search) + "&type=stakeholder";

	var countries = [];
	
	if (stakeholdersToggle)
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

	if (search == '') ajax_url = "/initiatives";
	else ajax_url = "/search?q=" + encodeURIComponent(search) + "&type=initiative";

	if (!stakeholdersToggle) $.ajax({
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

			marker.bindPopup("<b><p class='markerPopup'>Organization Details</p></b><b><span class='blueTitle'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Functional Area : </b>" + functional_area);

			if (shouldTypeBeDrawn(type) && shouldCountryBeDrawn(countryNameParse(country.toLowerCase()))) {
				countriesDrawnArray[country] = true;
				if (country == 'Regional') regionalCount++;
				else if (country == 'Global') globalCount++;
				else stakeholderCount++;
				window[countryNameParse(country.toLowerCase()) + 'PopupText'] += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p class='slideDownParagraph'><span class='plusminus'>+</span> " + name + "</p></a><p class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";
				window[countryNameParse(country.toLowerCase())].addLayer(marker);
			}
}

function plotCountryInitiative (id, country, name, type, url, date, size, latitude, longitude) {
	marker = L.marker(new L.LatLng(latitude, longitude), {
	});

	marker.bindPopup("<b><p class='markerPopup'>Initiative Details</p></b><b><span class='blueTitle'>" + name + "</span></b><br><b>Type : </b>" + type + "<br><b>Website : </b><a href='" + fixUrl(url) + "' target='_blank'>" + url + "</a><br><b>Year : </b>" + date);
	
	if (shouldCategoryBeDrawn(type) && shouldCountryBeDrawn(countryNameParse(country.toLowerCase()))) {
		countriesDrawnArray[country] = true;
		if (country == 'Regional') regionalCount++;
		else if (country == 'Global') globalCount++;
		else stakeholderCount++;
		window[countryNameParse(country.toLowerCase()) + 'initiativesPopupText'] += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p class='slideDownParagraph'><span class='plusminus'>+</span> " + name + "</p></a><p class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + fixUrl(url) + "'>" + url + "</a><br><b>Year : </b>" + date + "</p></div>";
		window[countryNameParse(country.toLowerCase()) + "initiatives"].addLayer(marker);
	}
}

function drawLabels() {
	var icon = new L.Icon.Default();
	icon.options.shadowSize = shadowsize;
	mkr = L.marker(new L.LatLng(globalLabelLat, globalLabelLng), { opacity: opacity, icon: icon });
	mkr.bindLabel("Global", {noHide: true, className: "my-label", offset: [globalXoffset, globalYoffset] });
	map.addLayer(mkr);
	mkr2 = L.marker(new L.LatLng(regionalLabelLat, regionalLabelLng), { opacity: opacity });
	mkr2.bindLabel("Regional", {noHide: true, className: "my-label", offset: [regionalXoffset, regionalYoffset] });
	map.addLayer(mkr2);
};

function drawInitiativeLabels() {
	var icon = new L.Icon.Default();
	icon.options.shadowSize = shadowsize;
	mkr = L.marker(new L.LatLng(globalLabelLat, globalLabelLng), { opacity: opacity, icon: icon });
	mkr.bindLabel("Global", {noHide: true, className: "my-label", offset: [globalXoffset, globalYoffset] });
	map.addLayer(mkr);
	mkr2 = L.marker(new L.LatLng(regionalLabelLat, regionalLabelLng), { opacity: opacity });
	mkr2.bindLabel("Regional", {noHide: true, className: "my-label", offset: [regionalXoffset, regionalYoffset] });
	map.addLayer(mkr2);
};
