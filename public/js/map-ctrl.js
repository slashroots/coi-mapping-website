var marker = null;

var bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = true;

var preContent = "";

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

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {
	
	switch (country) {

		case "Jamaica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			
			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br>Website : " + url + "<br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				jamaica.addLayer(marker);

			}

			break;

		case "Barbados" : marker = L.marker(new L.LatLng(latitude, longitude), {
			            								//title: title
		});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				barbados.addLayer(marker);

			}

			break;

		case "Bahamas" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				bahamas.addLayer(marker);

			}

			break;

		case "Cuba" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				cuba.addLayer(marker);

			}

			break;

		case "Haiti" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				haiti.addLayer(marker);

			}

			break;

		case "Anguilla" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				anguilla.addLayer(marker);

			}

			break;

		case "Montserrat" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				montserrat.addLayer(marker);

			}

			break;

		case "Saint Lucia" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintlucia.addLayer(marker);

			}

			break;

		case "Saint Vincent" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintvincent.addLayer(marker);

			}

			break;

		case "Dominica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				dominica.addLayer(marker);

			}

			break;

		case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				antigua.addLayer(marker);

			}

			break;

		case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				trinidad.addLayer(marker);

			}

			break;

		case "Saint Kitts" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				saintkitts.addLayer(marker);

			}

			break;

		case "Belize" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				belize.addLayer(marker);

			}

			break;

		case "Guyana" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				guyana.addLayer(marker);

			}

			break;

		case "Suriname" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				suriname.addLayer(marker);

			}

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				grenada.addLayer(marker);

			}

			break;

		case "Global" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {

				globalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				global.addLayer(marker);

			}

			break;

		case "Regional" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) {
				
				regionalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><p style='font-weight:bold;margin:0;padding:0;padding-top:4px;'><span class='plusminus' style='font-size:14pt;color:black;'>+</span> " + name + "</p></a><p style='display:none;padding:0;margin:0;padding-left:15px;' class='organization-content'>" + "<b>Type : </b>" + type + "<br><b>Website : </b><a target='_blank' href='" + url + "'>" + url + "</a><br><b>Functional Area : </b>" + functional_area + "</p></div>";

				regional.addLayer(marker);
				
			}

			break;
		
	}
	
}
