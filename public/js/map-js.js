
var geocodesData = null;

var size = 0;

	$.ajax({

	type: "GET",

	//url: encodeURI("http://localhost:3000/countries"),
	url: "/countries",

	dataType: "json",

	success: function (data) {

		geocodesData = data;

	}

});

function geoCode (countryname) {

	//alert(geocodesData.length);

	for (var i = 0; i < geocodesData.length; i++) {

		if (geocodesData[i].name == countryname) {
			//alert(geocodesData[i].latitude + ", " + geocodesData[i].longitude);
			return geocodesData[i].latitude + ", " + geocodesData[i].longitude;
		}

	}

}

var jamaica, regional, global, barbados, bahamas, cuba, haiti, anguilla, grenada, montserrat, saintlucia, saintvincent, trinidad, dominica, antigua, saintkitts, belize, guyana, suriname = null;

var jamaicanPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Organizations</p></b>";

function loadCountries () {

	jamaicanPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Organizations</p></b>";

	globalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Organizations</p></b>";

	regionalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Organizations</p></b>";

	global = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	global.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Global").split(",")[0], geoCode("Global").split(",")[1]])
			.setContent(globalPopupText)
			.openOn(map);
		
	});

	regional = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	regional.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Regional").split(",")[0], geoCode("Regional").split(",")[1]])
			.setContent(regionalPopupText)
			.openOn(map);
	});
	
	jamaica = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	jamaica.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Jamaica").split(",")[0], geoCode("Jamaica").split(",")[1]])
			.setContent(jamaicanPopupText)
			.openOn(map);
	});

	barbados = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	barbados.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Barbados").split(",")[0], geoCode("Barbados").split(",")[1]])
			.setContent(barbadosPopupText)
			.openOn(map);
	});

	bahamas = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	bahamas.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Bahamas").split(",")[0], geoCode("Bahamas").split(",")[1]])
			.setContent(bahamasPopupText)
			.openOn(map);
	});

	cuba = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	cuba.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Cuba").split(",")[0], geoCode("Cuba").split(",")[1]])
			.setContent(cubaPopupText)
			.openOn(map);
	});

	haiti = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	haiti.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Haiti").split(",")[0], geoCode("Haiti").split(",")[1]])
			.setContent(haitiPopupText)
			.openOn(map);
	});

	anguilla = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	anguilla.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Anguilla").split(",")[0], geoCode("Anguilla").split(",")[1]])
			.setContent(anguillaPopupText)
			.openOn(map);
	});


	grenada = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	grenada.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Grenada").split(",")[0], geoCode("Grenada").split(",")[1]])
			.setContent(grenadaPopupText)
			.openOn(map);
	});

	montserrat = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	montserrat.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Montserrat").split(",")[0], geoCode("Montserrat").split(",")[1]])
			.setContent(montserratPopupText)
			.openOn(map);
	});

	saintlucia = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	saintlucia.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Lucia").split(",")[0], geoCode("Saint Lucia").split(",")[1]])
			.setContent(saintluciaPopupText)
			.openOn(map);
	});

	saintvincent = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	saintvincent.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Vincent").split(",")[0], geoCode("Saint Vincent").split(",")[1]])
			.setContent(saintvincentPopupText)
			.openOn(map);
	});

	trinidad = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	trinidad.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Trinidad and Tobago").split(",")[0], geoCode("Trinidad and Tobago").split(",")[1]])
			.setContent(trinidadPopupText)
			.openOn(map);
	});

	dominica = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	dominica.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Dominica").split(",")[0], geoCode("Dominica").split(",")[1]])
			.setContent(dominicaPopupText)
			.openOn(map);
	});

	antigua = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	antigua.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Antigua").split(",")[0], geoCode("Antigua").split(",")[1]])
			.setContent(antiguaPopupText)
			.openOn(map);
	});

	saintkitts = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	saintkitts.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Kitts").split(",")[0], geoCode("Saint Kitts").split(",")[1]])
			.setContent(saintkittsPopupText)
			.openOn(map);
	});

	belize = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	belize.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Belize").split(",")[0], geoCode("Belize").split(",")[1]])
			.setContent(belizePopupText)
			.openOn(map);
	});

	guyana = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	guyana.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Guyana").split(",")[0], geoCode("Guyana").split(",")[1]])
			.setContent(guyanaPopupText)
			.openOn(map);
	});

	suriname = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	suriname.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Suriname").split(",")[0], geoCode("Suriname").split(",")[1]])
			.setContent(surinamePopupText)
			.openOn(map);
	});

	grenada = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		zoomToBoundsOnClick: false
	});

	grenada.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Grenada").split(",")[0], geoCode("Grenada").split(",")[1]])
			.setContent(grenadaPopupText)
			.openOn(map);
	});

}

loadCountries();

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
	maxZoom: 8,
	minZoom: 5,
}).addTo(map);

getEverything('');

map.addLayer(jamaica);

map.addLayer(bahamas);

map.addLayer(belize);

map.addLayer(barbados);

map.addLayer(cuba);map.addLayer(anguilla);map.addLayer(haiti);map.addLayer(grenada);

map.addLayer(montserrat);map.addLayer(saintlucia);map.addLayer(saintvincent);map.addLayer(trinidad);

map.addLayer(dominica);map.addLayer(antigua);map.addLayer(saintkitts);map.addLayer(belize);

map.addLayer(guyana);map.addLayer(suriname);map.addLayer(grenada);

/*var sidebar = L.control.sidebar('sidebar', {
	position: 'left'
});

map.addControl(sidebar);

sidebar.show();*/

//

$(document).ready(function(){

	$( ".accordion" ).accordion({
		collapsible: true,
		active: 2
	});

	$(".country-boxes").click(function (event) {
		
		//alert("Country box click");

		if (!$("#" + event.target.id).prop("checked")) map.removeLayer(window[event.target.id]);

		else map.addLayer(window[event.target.id]);

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

});


function shouldTypeBeDrawn (marker_type) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise

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



/*for (var x = 0;x < eduArray.length;x++) {

 jamaica.removeLayer(eduArray[x]);

 }*/

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
		
		if (!$(this).prop("checked")) {
			
			if ($(this).prop("id") != 'country-list') map.addLayer(window[$(this).prop("id")]);

			$(this).prop('checked', true);
			
		}
	});

}

function resetTypeFilters () {

	bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = true;

	$(".type-boxes").each(function(){

		if (!$(this).prop("checked")) {

			$(this).prop('checked', true);

		}
	});

}

function handleSearchInput () {

	map.removeLayer(jamaica);

	map.removeLayer(global);

	map.removeLayer(regional);
	
	map.removeLayer(bahamas);

	map.removeLayer(belize);

	map.removeLayer(barbados);

	map.removeLayer(cuba);map.removeLayer(anguilla);map.removeLayer(haiti);map.removeLayer(grenada);

	map.removeLayer(montserrat);map.removeLayer(saintlucia);map.removeLayer(saintvincent);map.removeLayer(trinidad);

	map.removeLayer(dominica);map.removeLayer(antigua);map.removeLayer(saintkitts);map.removeLayer(belize);

	map.removeLayer(guyana);map.removeLayer(suriname);map.removeLayer(grenada);

	loadCountries();

	getEverything(document.getElementById('search-box').value);
	
}

function putLayersOnMap () {
	
	map.addLayer(jamaica);

	map.addLayer(global);

	map.addLayer(regional);

	map.addLayer(bahamas);

	map.addLayer(belize);

	map.addLayer(barbados);

	map.addLayer(cuba);map.addLayer(anguilla);map.addLayer(haiti);map.addLayer(grenada);

	map.addLayer(montserrat);map.addLayer(saintlucia);map.addLayer(saintvincent);map.addLayer(trinidad);

	map.addLayer(dominica);map.addLayer(antigua);map.addLayer(saintkitts);map.addLayer(belize);

	map.addLayer(guyana);map.addLayer(suriname);map.addLayer(grenada);
	
}

