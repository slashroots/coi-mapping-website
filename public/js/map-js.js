var geocodesData = null;
var stakeholderCategories = null;
var initiativeCategories = null;
var mapLoaded = false;
var size = 0;
$.ajax({
	type: "GET",
	url: "/countries",
	dataType: "json",
	success: function (data) {
		geocodesData = data;
		loadCountries();
		mapReady();
		mapLoaded = true;
	}
});

$.ajax({
	type: "GET",
	url: "/categories?category=stakeholder",
	dataType: "json",
	success: function (data) {
		stakeholderCategories = data;
		loadStakeholderCategories ();
	}
});

$.ajax({
	type: "GET",
	url: "/categories?category=initiative",
	dataType: "json",
	success: function (data) {
		initiativeCategories = data;
		loadInitiativeCategories ();
	}
});

function clusterClickHandler (event) {
	var ctryname = event.target.ctryname;
	var popup = L.popup(
		{

			maxHeight: 300,

		}
	)
		.setLatLng(event.latlng)
		.setContent(window[ctryname + "PopupText"])
		.openOn(map);

}

var countryArr = [];
var stakeholderCatArr = [];
var initiativeCatArr = [];

function loadStakeholderCategories () {
	for (var i = 0; i < stakeholderCategories.length; i++) {
		var scname = stakeholderCategories[i].name;
		stakeholderCatArr.push(scname);
		scname = scname.replace(/\W/g, '');
		window[scname + "Toggle"] = false;
	}//endfor
}

function loadInitiativeCategories () {
	for (var i = 0; i < initiativeCategories.length; i++) {
		var icname = initiativeCategories[i].name;
		initiativeCatArr.push(icname);
		icname = icname.replace(/\W/g, '');
		window[icname + "Toggle"] = false;
	}//endfor
}

function loadCountries () {
		for (var i = 0; i < geocodesData.length; i++) {
			var cname = geocodesData[i].name;
			cname = cname.toLowerCase();
			if (cname.split(" ")[0] == "saint") {
				cname = cname.replace(" ", "");
			}
			else cname = cname.split(" ")[0];

			if (!mapLoaded) countryArr.push(cname);
			
			window[cname] = new L.MarkerClusterGroup({
				maxClusterRadius: 60,
				iconCreateFunction: null,
				spiderfyOnMaxZoom: false,
				showCoverageOnHover: true,
				singleMarkerMode: true,
				zoomToBoundsOnClick: false,
			});

			window[cname].ctryname = cname;
			window[cname].on('clusterclick', clusterClickHandler);
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
			window[cname + 'PopupText'] = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Organizations</p></b>";
			window[cname + 'initiativesPopupText'] = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Initiatives</p></b>";

			if (!mapLoaded) window[cname + 'Toggle'] = false;
		}//endfor
		
	globalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Organizations</p></b>";
	regionalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Organizations</p></b>";
	globalinitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Initiatives</p></b>";
	regionalinitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Initiatives</p></b>";

	if (stakeholdersToggle) {
		drawLabels();

		for (var i = 0; i < geocodesData.length; i++) {
			var cname = geocodesData[i].name;
			cname = cname.toLowerCase();
			if (cname.split(" ")[0] == "saint") {
				cname = cname.replace(" ", "");
			}
			else cname = cname.split(" ")[0];
			map.addLayer(window[cname]);
		}//endfor
	}

	else {
		drawLabels();
		for (var i = 0; i < geocodesData.length; i++) {
			var cname = geocodesData[i].name;
			cname = cname.toLowerCase();
			if (cname.split(" ")[0] == "saint") {
				cname = cname.replace(" ", "");
			}
			else cname = cname.split(" ")[0];
			map.addLayer(window[cname + "initiatives"]);
		}//endfor
	}
}

L.NumberedDivIcon = L.Icon.extend({
	options: {
		iconUrl: 'http://www.charliecroom.com/marker_hole.png',
		number: '',
		shadowUrl: null,
		iconSize: new L.Point(25, 41),
		iconAnchor: new L.Point(13, 41),
		popupAnchor: new L.Point(0, -33),
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

	createShadow: function () {
		return null;
	}
});

var map = L.map('map',
		{closePopupOnClick : false}).setView([17.96, -71.09], 5);
L.tileLayer(maptileurl + access_token, {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: maxMapZoom,
	minZoom: minMapZoom,
}).addTo(map);

getEverything('');

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
		for (var i = 0; i < stakeholderCatArr.length; i++) {
			if (event.target.id == stakeholderCatArr[i]) window[stakeholderCatArr[i].replace(/\W/g, '') + "Toggle"] = !window[stakeholderCatArr[i].replace(/\W/g, '') + "Toggle"];
		}
		handleSearchInput();
	});

	$(".category-boxes").click(function (event) {
		for (var i = 0; i < initiativeCatArr.length; i++) {
			if (event.target.id == initiativeCatArr[i]) window[initiativeCatArr[i].replace(/\W/g, '') + "Toggle"] = !window[initiativeCatArr[i].replace(/\W/g, '') + "Toggle"];
		}
		handleSearchInput();
	});
}

function shouldTypeBeDrawn (marker_type) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise
	var bool = false; // this will check to see if they're all false in which case all types will be rendered
	
	for (var i = 0; i < stakeholderCatArr.length; i++) {
		if (window[stakeholderCatArr[i].replace(/\W/g, '') + "Toggle"]) bool = true;
	}
	
	if (!bool) return true;//if still false - it means they're all false so we return true
	
	for (var i = 0; i < stakeholderCatArr.length; i++) {
		if (marker_type == stakeholderCatArr[i]) return window[stakeholderCatArr[i].replace(/\W/g, '') + "Toggle"];
	}

	return true;
}

function shouldCategoryBeDrawn (marker_type) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise
	var bool = false; // this will check to see if they're all false in which case all types will be rendered
	for (var i = 0; i < initiativeCatArr.length; i++) {
		if (window[initiativeCatArr[i].replace(/\W/g, '') + "Toggle"]) bool = true;
	}

	if (!bool) return true;//if still false - it means they're all false so we return true

	for (var i = 0; i < initiativeCatArr.length; i++) {
		if (marker_type == initiativeCatArr[i]) return window[initiativeCatArr[i].replace(/\W/g, '') + "Toggle"];
	}

	return true;
}

function shouldCountryBeDrawn (country_name) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise
	var ret = false;

	for (var i = 0; i < countryArr.length; i++) {
		if (window[countryArr[i] + "Toggle"]) ret = true;
	}//endfor
	
	if (!ret) return true; //if none of the boxes is checked return true
	
	for (var i = 0; i < countryArr.length; i++) {
		map.removeLayer(window[countryArr[i]]);
		map.removeLayer(window[countryArr[i] + "initiatives"]);
	}//endfor
	
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

}

function resetSearchBox () {
	document.getElementById('search-box').value = '';
	handleSearchInput();
}

function resetCountryFilters () {
	$(".country-boxes").each(function(){
		for (var i = 0; i < countryArr.length; i++) {
			window[countryArr[i] + "Toggle"] = false;
		}//endfor
		
		if ($(this).prop("checked")) {
			$(this).prop('checked', false);
		}
	});
}

function resetTypeFilters () {
	for (var i = 0; i < stakeholderCatArr.length; i++) {
		window[stakeholderCatArr[i].replace(/\W/g, '') + "Toggle"] = false;
	}

	$(".type-boxes").each(function(){
		if ($(this).prop("checked")) {
			$(this).prop('checked', false);
		}
	});
}

function resetCategoryFilters () {
	for (var i = 0; i < initiativeCatArr.length; i++) {
		window[initiativeCatArr[i].replace(/\W/g, '') + "Toggle"] = false;
	}
	
	$(".category-boxes").each(function(){

		if ($(this).prop("checked")) {
			$(this).prop('checked', false);
		}
	});
}

function handleSearchInput () {
	for (var i = 0; i < countryArr.length; i++) {
		map.removeLayer(window[countryArr[i]]);
		map.removeLayer(window[countryArr[i] + "initiatives"]);
	}//endfor

	loadCountries();
	getEverything(document.getElementById('search-box').value);
}

function putLayersOnMap () {
	if (stakeholdersToggle) {
		drawLabels();

		for (var i = 0; i < countryArr.length; i++) {
			map.addLayer(window[countryArr[i]]);
		}//endfor
	}	
	
	else {
		drawLabels();

		for (var i = 0; i < countryArr.length; i++) {
			map.addLayer(window[countryArr[i] + "initiatives"]);
		}//endfor
	}
}

$(".mapToggle").click(function(){
	if (!$(this).parent().hasClass( "active" )) {
		stakeholdersToggle = !stakeholdersToggle;

		if (stakeholdersToggle) {
			$("#stakeholders_only").show();
			$("#initiatives_only").hide();
			$('#search-box').attr('placeholder','Search stakeholders');
		}
		else {
			$("#stakeholders_only").hide();
			$("#initiatives_only").show();
			$('#search-box').attr('placeholder','Search initiatives');
		}
		handleSearchInput();
	}
});

jQuery(document).ready(function() {
	$("#initiatives_only").hide();
	jQuery('.tabs .tab-links a').on('click', function(e)  {
		var currentAttrValue = jQuery(this).attr('href');
		// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
		// Change/remove current tab to active
		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});
