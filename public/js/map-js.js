
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

var dominican, jamaica, regional, global, barbados, bahamas, cuba, haiti, anguilla, grenada, montserrat, saintlucia, saintvincent, trinidad, dominica, antigua, saintkitts, belize, guyana, suriname = null;

var dominicaninitiatives, jamaicainitiatives, regionalinitiatives, globalinitiatives, barbadosinitiatives, bahamasinitiatives, cubainitiatives, haitiinitiatives, anguillainitiatives, grenadainitiatives, montserratinitiatives, saintluciainitiatives, saintvincentinitiatives, trinidadinitiatives, dominicainitiatives, antiguainitiatives, saintkittsinitiatives, belizeinitiatives, guyanainitiatives, surinameinitiatives = null;

var dominicanPopupText = jamaicaPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Organizations</p></b>";

var dominicaninitiativesPopupText = jamaicainitiativesPopupText = barbadosinitiativesPopupText = bahamasinitiativesPopupText = cubainitiativesPopupText = antiguainitiativesPopupText = haitiinitiativesPopupText = anguillainitiativesPopupText = grenadainitiativesPopupText = montserratinitiativesPopupText = saintluciainitiativesPopupText = saintvincentinitiativesPopupText = trinidadinitiativesPopupText = dominicainitiativesPopupText = saintkittsinitiativesPopupText = belizeinitiativesPopupText = guyanainitiativesPopupText = surinameinitiativesPopupText = grenadainitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Initiatives</p></b>";

function loadCountries () {

	dominicanPopupText = jamaicaPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText = saintluciaPopupText = saintvincentPopupText = trinidadPopupText = dominicaPopupText = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Organizations</p></b>";

	//dominicaninitiativesPopupText = jamaicainitiativesPopupText = barbadosinitiativesPopupText = bahamasinitiativesPopupText = cubainitiativesPopupText = antiguainitiativesPopupText = haitiinitiativesPopupText = anguillainitiativesPopupText = grenadainitiativesPopupText = montserratinitiativesPopupText = saintluciainitiativesPopupText = saintvincentinitiativesPopupText = trinidadinitiativesPopupText = dominicainitiativesPopupText = saintkittsinitiativesPopupText = belizeinitiativesPopupText = guyanainitiativesPopupText = surinameinitiativesPopupText = grenadainitiativesPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;'>Initiatives</p></b>";

	globalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Global Organizations</p></b>";

	regionalPopupText = "<b><p style='font-size:11pt;border-bottom: 1px solid #000;margin:0;padding:0;''>Regional Organizations</p></b>";

	dominican = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	dominican.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Dominican Republic").split(",")[0], geoCode("Dominican Republic").split(",")[1]])
			.setContent(dominicanPopupText)
			.openOn(map);

	});


	global = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
			.setContent(jamaicaPopupText)
			.openOn(map);
	});

	barbados = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
		singleMarkerMode: true,
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
	
	//initiatives now

	dominicaninitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	dominicaninitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Dominican Republic").split(",")[0], geoCode("Dominican Republic").split(",")[1]])
			.setContent(dominicaninitiativesPopupText)
			.openOn(map);

	});


	globalinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	globalinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Global").split(",")[0], geoCode("Global").split(",")[1]])
			.setContent(globalinitiativesPopupText)
			.openOn(map);

	});

	regionalinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	regionalinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Regional").split(",")[0], geoCode("Regional").split(",")[1]])
			.setContent(regionalinitiativesPopupText)
			.openOn(map);
	});

	jamaicainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	jamaicainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Jamaica").split(",")[0], geoCode("Jamaica").split(",")[1]])
			.setContent(jamaicainitiativesPopupText)
			.openOn(map);
	});
	
	//alert(jamaicainitiativesPopupText);

	barbadosinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	barbadosinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Barbados").split(",")[0], geoCode("Barbados").split(",")[1]])
			.setContent(barbadosinitiativesPopupText)
			.openOn(map);
	});

	bahamasinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	bahamasinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Bahamas").split(",")[0], geoCode("Bahamas").split(",")[1]])
			.setContent(bahamasinitiativesPopupText)
			.openOn(map);
	});

	cubainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	cubainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Cuba").split(",")[0], geoCode("Cuba").split(",")[1]])
			.setContent(cubainitiativesPopupText)
			.openOn(map);
	});

	haitiinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	haitiinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Haiti").split(",")[0], geoCode("Haiti").split(",")[1]])
			.setContent(haitiinitiativesPopupText)
			.openOn(map);
	});

	anguillainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	anguillainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Anguilla").split(",")[0], geoCode("Anguilla").split(",")[1]])
			.setContent(anguillainitiativesPopupText)
			.openOn(map);
	});


	grenadainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	grenadainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Grenada").split(",")[0], geoCode("Grenada").split(",")[1]])
			.setContent(grenadainitiativesPopupText)
			.openOn(map);
	});

	montserratinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	montserratinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Montserrat").split(",")[0], geoCode("Montserrat").split(",")[1]])
			.setContent(montserratinitiativesPopupText)
			.openOn(map);
	});

	saintluciainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	saintluciainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Lucia").split(",")[0], geoCode("Saint Lucia").split(",")[1]])
			.setContent(saintluciainitiativesPopupText)
			.openOn(map);
	});

	saintvincentinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	saintvincentinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Vincent").split(",")[0], geoCode("Saint Vincent").split(",")[1]])
			.setContent(saintvincentinitiativesPopupText)
			.openOn(map);
	});

	trinidadinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	trinidadinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Trinidad and Tobago").split(",")[0], geoCode("Trinidad and Tobago").split(",")[1]])
			.setContent(trinidadinitiativesPopupText)
			.openOn(map);
	});

	dominicainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	dominicainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Dominica").split(",")[0], geoCode("Dominica").split(",")[1]])
			.setContent(dominicainitiativesPopupText)
			.openOn(map);
	});

	antiguainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	antiguainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Antigua").split(",")[0], geoCode("Antigua").split(",")[1]])
			.setContent(antiguainitiativesPopupText)
			.openOn(map);
	});

	saintkittsinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	saintkittsinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Saint Kitts").split(",")[0], geoCode("Saint Kitts").split(",")[1]])
			.setContent(saintkittsinitiativesPopupText)
			.openOn(map);
	});

	belizeinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	belizeinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Belize").split(",")[0], geoCode("Belize").split(",")[1]])
			.setContent(belizeinitiativesPopupText)
			.openOn(map);
	});

	guyanainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	guyanainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Guyana").split(",")[0], geoCode("Guyana").split(",")[1]])
			.setContent(guyanainitiativesPopupText)
			.openOn(map);
	});

	surinameinitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	surinameinitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Suriname").split(",")[0], geoCode("Suriname").split(",")[1]])
			.setContent(surinameinitiativesPopupText)
			.openOn(map);
	});

	grenadainitiatives = new L.MarkerClusterGroup({
		maxClusterRadius: 60,
		iconCreateFunction: null,
		spiderfyOnMaxZoom: true,
		showCoverageOnHover: true,
		singleMarkerMode: true,
		zoomToBoundsOnClick: false
	});

	grenadainitiatives.on('clusterclick', function (a) {
		//a.layer.spiderfy();
		//set up a standalone popup (use a popup as a layer)
		var popup = L.popup(
			{

				maxHeight: 300,

			}
		)
			.setLatLng([geoCode("Grenada").split(",")[0], geoCode("Grenada").split(",")[1]])
			.setContent(grenadainitiativesPopupText)
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

if (stakeholdersToggle) {

	map.addLayer(jamaica);

	map.addLayer(dominican);

	map.addLayer(global);

	map.addLayer(regional);

	map.addLayer(bahamas);

	map.addLayer(belize);

	map.addLayer(barbados);

	map.addLayer(cuba);
	map.addLayer(anguilla);
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
	map.addLayer(anguillainitiatives);
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

});


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


function shouldCountryBeDrawn (country_name) { //this function will return true if a marker should be drawn on the map based on its type or false otherwise

	if (!dominicanToggle && !jamaicaToggle && !regionalToggle && !globalToggle && !barbadosToggle && !bahamasToggle && !cubaToggle && !haitiToggle && !anguillaToggle && !grenadaToggle && !montserratToggle && !saintluciaToggle && !saintvincentToggle && !trinidadToggle && !dominicaToggle && !antiguaToggle && !saintkittsToggle && !belizeToggle && !guyanaToggle && !surinameToggle) return true;

	var toggleName = countryNameParse (country_name).toLowerCase().replace(/\s+/g, '');

	return window[toggleName + 'Toggle'];

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

		jamaicaToggle = regionalToggle = globalToggle = barbadosToggle = bahamasToggle = cubaToggle = haitiToggle = anguillaToggle = grenadaToggle = montserratToggle = saintluciaToggle = saintvincentToggle = trinidadToggle = dominicaToggle = antiguaToggle = saintkittsToggle = belizeToggle = guyanaToggle = surinameToggle = dominicanToggle = false;

		if ($(this).prop("checked")) {

			$(this).prop('checked', false);

		}
	});

}

function resetTypeFilters () {

	bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = true;

	$(".type-boxes").each(function(){

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

	map.removeLayer(cuba);map.removeLayer(anguilla);map.removeLayer(haiti);map.removeLayer(grenada);

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

	map.removeLayer(cubainitiatives);map.removeLayer(anguillainitiatives);map.removeLayer(haitiinitiatives);map.removeLayer(grenadainitiatives);

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
		map.addLayer(anguilla);
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
		map.addLayer(anguillainitiatives);
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

	stakeholdersToggle = !stakeholdersToggle;
	
	handleSearchInput();
	
});

