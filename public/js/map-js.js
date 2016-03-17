
var geocodesData = null;

var size = 0;

$.ajax({

	type: "GET",

	//url: encodeURI("http://localhost:3000/countries"),
	url: "/countries",

	dataType: "json",

	success: function (data) {

		geocodesData = data;
		
		loadCountries();
		
		mapReady();

	}

});

var dominican, jamaica, regional, global, barbados, bahamas, cuba, haiti, anguilla, grenada, montserrat, saintlucia, saintvincent, trinidad, dominica, antigua, saintkitts, belize, guyana, suriname = null;

var dominicaninitiatives, jamaicainitiatives, regionalinitiatives, globalinitiatives, barbadosinitiatives, bahamasinitiatives, cubainitiatives, haitiinitiatives, anguillainitiatives, grenadainitiatives, montserratinitiatives, saintluciainitiatives, saintvincentinitiatives, trinidadinitiatives, dominicainitiatives, antiguainitiatives, saintkittsinitiatives, belizeinitiatives, guyanainitiatives, surinameinitiatives = null;

var dominicanPopupText = jamaicaPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Organizations</p></b>";

var dominicaninitiativesPopupText = jamaicainitiativesPopupText = barbadosinitiativesPopupText = bahamasinitiativesPopupText = cubainitiativesPopupText = antiguainitiativesPopupText = haitiinitiativesPopupText = anguillainitiativesPopupText = grenadainitiativesPopupText = montserratinitiativesPopupText = saintluciainitiativesPopupText = saintvincentinitiativesPopupText = trinidadinitiativesPopupText = dominicainitiativesPopupText = saintkittsinitiativesPopupText = belizeinitiativesPopupText = guyanainitiativesPopupText = surinameinitiativesPopupText = grenadainitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Initiatives</p></b>";

function clusterClickHandler (event) {
	//a.layer.spiderfy();
	//set up a standalone popup (use a popup as a layer)
	//alert(event.latlng.toString());

	var ctryname = event.target.ctryname;
	
	//alert(reverseGeoCode(event.latlng.lat, event.latlng.lng));

	console.log(event);

	var popup = L.popup(
		{

			maxHeight: 300,

		}
	)
		.setLatLng(event.latlng)
		.setContent(window[ctryname + "PopupText"])
		.openOn(map);

	//alert(ctryname);

}

function loadCountries () {

	dominicanPopupText = jamaicaPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Organizations</p></b>";

	dominicaninitiativesPopupText = jamaicainitiativesPopupText = barbadosinitiativesPopupText = bahamasinitiativesPopupText = cubainitiativesPopupText = antiguainitiativesPopupText = haitiinitiativesPopupText = anguillainitiativesPopupText = grenadainitiativesPopupText = montserratinitiativesPopupText = saintluciainitiativesPopupText = saintvincentinitiativesPopupText = trinidadinitiativesPopupText = dominicainitiativesPopupText = saintkittsinitiativesPopupText = belizeinitiativesPopupText = guyanainitiativesPopupText = surinameinitiativesPopupText = grenadainitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Initiatives</p></b>";

	globalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Organizations</p></b>";

	regionalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Organizations</p></b>";

	globalinitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Initiatives</p></b>";

	regionalinitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Initiatives</p></b>";
	

	for (var i = 0; i < geocodesData.length; i++) {

		/*if (geocodesData[i].name == countryname) {
				//alert(geocodesData[i].latitude + ", " + geocodesData[i].longitude);
			return geocodesData[i].latitude + ", " + geocodesData[i].longitude;
		}*/
		
		var cname = geocodesData[i].name;
		
		cname = cname.toLowerCase();
		
		if (cname.split(" ")[0] == "saint") {
			
			cname = cname.replace(" ", "");
			
		}
		
		else cname = cname.split(" ")[0];

		window[cname] = new L.MarkerClusterGroup({
			maxClusterRadius: 60,
			iconCreateFunction: null,
			spiderfyOnMaxZoom: false,
			showCoverageOnHover: true,
			singleMarkerMode: true,
			zoomToBoundsOnClick: false,
		});

		window[cname].ctryname = cname;
		
		console.log(window[cname]);

		window[cname].on('clusterclick', clusterClickHandler);
		
		//initiatives now

		window[cname + 'initiatives'] = new L.MarkerClusterGroup({
			maxClusterRadius: 60,
			iconCreateFunction: null,
			spiderfyOnMaxZoom: false,
			showCoverageOnHover: true,
			singleMarkerMode: true,
			zoomToBoundsOnClick: false,
		});

		window[cname + 'initiatives'].ctryname = cname + 'initiatives';

		window[cname + 'initiatives'].on('clusterclick', clusterClickHandler);
		

	}//endfor

	if (stakeholdersToggle) {

		map.addLayer(jamaica);

		map.addLayer(dominican);

		drawLabels();

		map.addLayer(global);

		map.addLayer(regional);

		map.addLayer(bahamas);

		map.addLayer(belize);

		map.addLayer(barbados);

		map.addLayer(cuba);
		map.addLayer(haiti);
		map.addLayer(grenada);

		map.addLayer(montserrat);
		map.addLayer(saintlucia);
		map.addLayer(saintvincent);
		map.addLayer(trinidad);

		map.addLayer(dominica);
		map.addLayer(antigua);
		map.addLayer(saintkitts);
		map.addLayer(belize);

		map.addLayer(guyana);
		map.addLayer(suriname);
		map.addLayer(grenada);

	}

	else {

		//initiatives

		map.addLayer(dominicaninitiatives);

		map.addLayer(jamaicainitiatives);

		map.addLayer(bahamasinitiatives);

		map.addLayer(belizeinitiatives);

		map.addLayer(barbadosinitiatives);

		map.addLayer(cubainitiatives);
		map.addLayer(haitiinitiatives);
		map.addLayer(grenadainitiatives);

		map.addLayer(montserratinitiatives);
		map.addLayer(saintluciainitiatives);
		map.addLayer(saintvincentinitiatives);
		map.addLayer(trinidadinitiatives);

		map.addLayer(dominicainitiatives);
		map.addLayer(antiguainitiatives);
		map.addLayer(saintkittsinitiatives);
		map.addLayer(belizeinitiatives);

		map.addLayer(guyanainitiatives);
		map.addLayer(surinameinitiatives);
		map.addLayer(grenadainitiatives);

		drawInitiativeLabels();

		map.addLayer(globalinitiatives);

		map.addLayer(regionalinitiatives);

	}



}

//loadCountries();

//

L.NumberedDivIcon = L.Icon.extend({
	options: {
		// EDIT THIS TO POINT TO THE FILE AT http://www.charliecroom.com/marker_hole.png (or your own marker)
		iconUrl: 'http://www.charliecroom.com/marker_hole.png',
		number: '',
		shadowUrl: null,
		iconSize: new L.Point(25, 41),
		iconAnchor: new L.Point(13, 41),
		popupAnchor: new L.Point(0, -33),
		/*
		 iconAnchor: (Point)
		 popupAnchor: (Point)
		 */
		className: 'leaflet-div-icon'
	},

	createIcon: function () {
		var div = document.createElement('div');
		var img = this._createImg(this.options['iconUrl']);
		var numdiv = document.createElement('div');
		numdiv.setAttribute ( "class", "number" );
		numdiv.innerHTML = this.options['number'] || '';
		div.appendChild ( img );
		div.appendChild ( numdiv );
		this._setIconStyles(div, 'icon');
		return div;
	},

	//you could change this to add a shadow like in the normal marker if you really wanted
	createShadow: function () {
		return null;
	}
});

//



/***  little hack starts here ***/
L.Map = L.Map.extend({
	openPopup: function(popup) {
		//        this.closePopup();  // just comment this
		this._popup = popup;

		return this.addLayer(popup).fire('popupopen', {
			popup: this._popup
		});
	}
}); /***  end of hack ***/

var map = L.map('map',
		{closePopupOnClick : false}).setView([17.96, -71.09], 5);
//https://a.tiles.mapbox.com/v4/nickjwill.lcnch31p/page.html?access_token=pk.eyJ1Ijoibmlja2p3aWxsIiwiYSI6Im4xQWFQeTQifQ.bwI5KQmy7z7kS9woXzbplw#6/31.625/40.463
L.tileLayer('http://{s}.tiles.mapbox.com/v4/nickjwill.lcnc6kpo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmlja2p3aWxsIiwiYSI6Im4xQWFQeTQifQ.bwI5KQmy7z7kS9woXzbplw', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 6,
	minZoom: 5,
}).addTo(map);

getEverything('');

/*var sidebar = L.control.sidebar('sidebar', {
 position: 'left'
 });

 map.addControl(sidebar);

 sidebar.show();*/

//

function mapReady ( ){

	$( ".accordion" ).accordion({
		collapsible: true,
		active: 2
	});

	$(".country-boxes").click(function (event) {

		var layerToRemove = event.target.id;

		if (layerToRemove.split(" ")[0] == 'saint') layerToRemove = layerToRemove.split(" ")[0]+layerToRemove.split(" ")[1];

		else if (layerToRemove.split(" ")[1] == 'and') layerToRemove = layerToRemove.split(" ")[0];
		
		else layerToRemove = layerToRemove.split(" ")[0];

		window[layerToRemove + 'Toggle'] = !window[layerToRemove + 'Toggle'];

		handleSearchInput();

	});

	$(".type-boxes").click(function (event) {

		switch (event.target.id) {

			case 'Bank\\Investment\\Consulting' : bankToggle = !bankToggle;

				break;

			case 'Education\\Research' : eduToggle = !eduToggle;

				break;

			case 'ICT Vendor' : ictToggle = !ictToggle;

				break;

			case 'ICT Services' : ictToggle2 = !ictToggle2;

				break;

			case 'Government' : govToggle = !govToggle;

				break;

			case 'Media\\Marketing' : mediaToggle = !mediaToggle;

				break;

			case 'MNO\\Telecommunications' : mnoToggle = !mnoToggle;

				break;

			case 'NGO' : ngoToggle = !ngoToggle;

				break;

		}

		handleSearchInput();

	});

	$(".category-boxes").click(function (event) {

		switch (event.target.id) {

			case 'Competition\\Hackathon' : competitionToggle = !competitionToggle;

				break;

			case 'Conference\\Exhibition' : conferenceToggle = !conferenceToggle;

				break;

			case 'Education\\Capacity Building' :  educationToggle = !educationToggle;

				break;

			case 'Incubator' : incubatorToggle = !incubatorToggle;

				break;

			case 'Infrastructure' : infrastructureToggle = !infrastructureToggle;

				break;

			case 'Mobile App Project' : mobileToggle = !mobileToggle;

				break;

			case 'Venture Capital' : ventureToggle = !ventureToggle;

				break;

		}

		handleSearchInput();

	});

}

function shouldTypeBeDrawn (marker_type) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise

	if (!bankToggle && !eduToggle && !ictToggle && !ictToggle2 && !govToggle && !mediaToggle && !mnoToggle && !ngoToggle) return true;

	switch (marker_type) {

		case 'Bank\\Investment\\Consulting' : return bankToggle;

			break;

		case 'Education\\Research' : return eduToggle;

			break;

		case 'ICT Vendor' :  return ictToggle;

			break;

		case 'ICT Services' : return ictToggle2;

			break;

		case 'Government' : return govToggle;

			break;

		case 'Media\\Marketing' : return mediaToggle;

			break;

		case 'MNO\\Telecommunications' : return mnoToggle;

			break;

		case 'NGO' : return ngoToggle;

			break;

	}

	return true;

}

function shouldCategoryBeDrawn (marker_type) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise

	if (!competitionToggle && !conferenceToggle && !educationToggle && !incubatorToggle && !infrastructureToggle && !mobileToggle && !ventureToggle) return true;

	switch (marker_type) {

		case 'Competition\\Hackathon' : return competitionToggle;

			break;

		case 'Conference\\Exhibition' : return conferenceToggle;

			break;

		case 'Education\\Capacity Building' :  return educationToggle;

			break;

		case 'Incubator' : return incubatorToggle;

			break;

		case 'Infrastructure' : return infrastructureToggle;

			break;

		case 'Mobile App Project' : return mobileToggle;

			break;

		case 'Venture Capital' : return ventureToggle;

			break;

	}

	return true;

}


function shouldCountryBeDrawn (country_name) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise

	if (!dominicanToggle && !jamaicaToggle && !regionalToggle && !globalToggle && !barbadosToggle && !bahamasToggle && !cubaToggle && !haitiToggle && !anguillaToggle && !grenadaToggle && !montserratToggle && !saintluciaToggle && !saintvincentToggle && !trinidadToggle && !dominicaToggle && !antiguaToggle && !saintkittsToggle && !belizeToggle && !guyanaToggle && !surinameToggle) return true;

	var toggleName = countryNameParse (country_name).toLowerCase().replace(/\s+/g, '');

	return window[toggleName + 'Toggle'];

}


function infoSlideDown (element) {

	var subElement = $(element).next().slideToggle("fast");

	if(element.childNodes[0].childNodes[0].innerHTML == "+") element.childNodes[0].childNodes[0].innerHTML = '-';

	else if(element.childNodes[0].childNodes[0].innerHTML == "-") element.childNodes[0].childNodes[0].innerHTML = '+';

}

var options = {
	callback: handleSearchInput,
	wait: 750,
	highlight: true,
	captureLength: 2
}

$("#search-box").typeWatch( options );

document.getElementById('search-box').onkeypress = function(e){
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if (keyCode == '13'){
		// Enter pressed
		//handleSearchInput();
		return false;
	}

	//return false;

}

function resetSearchBox () {

	document.getElementById('search-box').value = '';

	handleSearchInput();

}

function resetCountryFilters () {

	$(".country-boxes").each(function(){

		jamaicaToggle = regionalToggle = globalToggle = barbadosToggle = bahamasToggle = cubaToggle = haitiToggle = anguillaToggle = grenadaToggle = montserratToggle = saintluciaToggle = saintvincentToggle = trinidadToggle = dominicaToggle = antiguaToggle = saintkittsToggle = belizeToggle = guyanaToggle = surinameToggle = dominicanToggle = false;

		if ($(this).prop("checked")) {

			$(this).prop('checked', false);

		}
	});

}

function resetTypeFilters () {

	bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = false;

	$(".type-boxes").each(function(){

		if ($(this).prop("checked")) {

			$(this).prop('checked', false);

		}
	});

}

function resetCategoryFilters () {

	competitionToggle = conferenceToggle = educationToggle = incubatorToggle = infrastructureToggle = mobileToggle = ventureToggle = false;

	$(".category-boxes").each(function(){

		if ($(this).prop("checked")) {

			$(this).prop('checked', false);

		}
	});

}

function handleSearchInput () {

	map.removeLayer(jamaica);

	map.removeLayer(dominican);

	map.removeLayer(global);

	map.removeLayer(regional);

	map.removeLayer(bahamas);

	map.removeLayer(belize);

	map.removeLayer(barbados);

	map.removeLayer(cuba);map.removeLayer(haiti);map.removeLayer(grenada);

	map.removeLayer(montserrat);map.removeLayer(saintlucia);map.removeLayer(saintvincent);map.removeLayer(trinidad);

	map.removeLayer(dominica);map.removeLayer(antigua);map.removeLayer(saintkitts);map.removeLayer(belize);

	map.removeLayer(guyana);map.removeLayer(suriname);map.removeLayer(grenada);

	map.removeLayer(jamaicainitiatives);

	map.removeLayer(dominicaninitiatives);

	map.removeLayer(globalinitiatives);

	map.removeLayer(regionalinitiatives);

	map.removeLayer(bahamasinitiatives);

	map.removeLayer(belizeinitiatives);

	map.removeLayer(barbadosinitiatives);

	map.removeLayer(cubainitiatives);map.removeLayer(haitiinitiatives);map.removeLayer(grenadainitiatives);

	map.removeLayer(montserratinitiatives);map.removeLayer(saintluciainitiatives);map.removeLayer(saintvincentinitiatives);map.removeLayer(trinidadinitiatives);

	map.removeLayer(dominicainitiatives);map.removeLayer(antiguainitiatives);map.removeLayer(saintkittsinitiatives);map.removeLayer(belizeinitiatives);

	map.removeLayer(guyanainitiatives);map.removeLayer(surinameinitiatives);map.removeLayer(grenadainitiatives);

	loadCountries();

	getEverything(document.getElementById('search-box').value);

}

function putLayersOnMap () {

	if (stakeholdersToggle) {

		map.addLayer(jamaica);

		map.addLayer(dominican);

		map.addLayer(global);

		map.addLayer(regional);

		map.addLayer(bahamas);

		map.addLayer(belize);

		map.addLayer(barbados);

		map.addLayer(cuba);
		map.addLayer(haiti);
		map.addLayer(grenada);

		map.addLayer(montserrat);
		map.addLayer(saintlucia);
		map.addLayer(saintvincent);
		map.addLayer(trinidad);

		map.addLayer(dominica);
		map.addLayer(antigua);
		map.addLayer(saintkitts);
		map.addLayer(belize);

		map.addLayer(guyana);
		map.addLayer(suriname);
		map.addLayer(grenada);

	}	
	
	else {

		//initiatives

		map.addLayer(dominicaninitiatives);

		map.addLayer(jamaicainitiatives);

		map.addLayer(bahamasinitiatives);

		map.addLayer(belizeinitiatives);

		map.addLayer(barbadosinitiatives);

		map.addLayer(cubainitiatives);
		map.addLayer(haitiinitiatives);
		map.addLayer(grenadainitiatives);

		map.addLayer(montserratinitiatives);
		map.addLayer(saintluciainitiatives);
		map.addLayer(saintvincentinitiatives);
		map.addLayer(trinidadinitiatives);

		map.addLayer(dominicainitiatives);
		map.addLayer(antiguainitiatives);
		map.addLayer(saintkittsinitiatives);
		map.addLayer(belizeinitiatives);

		map.addLayer(guyanainitiatives);
		map.addLayer(surinameinitiatives);
		map.addLayer(grenadainitiatives);
		
		map.addLayer(globalinitiatives);

		map.addLayer(regionalinitiatives);

	}	

}

$(".mapToggle").click(function(){
	
	if (!$(this).parent().hasClass( "active" )) {

		stakeholdersToggle = !stakeholdersToggle;

		if (stakeholdersToggle) {

			$("#stakeholders_only").show();

			document.getElementById("initiatives_only").style.display = "none";

		}

		else {

			document.getElementById("stakeholders_only").style.display = "none";

			$("#initiatives_only").show();

		}

		handleSearchInput();

	}	
	
});

document.getElementById("initiatives_only").style.display = "none";

jQuery(document).ready(function() {
	jQuery('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');

		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

		e.preventDefault();
	});
});

