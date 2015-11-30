/**
 * Created by Nick on 11/17/15.
 */
	
var marker = null;

var bankArray = Array(0);

var govArray = Array(0);

var eduArray = Array(0);

var ngoArray = Array(0);

var ictArray = Array(0);

var mnoArray = Array(0);

var mediaArray = Array(0);

//alert(bankArray[1]);

var iconShade = "http://www.argentmac.com/devca/icons/Aliz.jpg";

var preContent = "";

function getEverything () {

	var countries = [];

	$.ajax({

		type: "GET",

		url: "http://54.68.79.59/stakeholdermap/public/stakeholdersJSON",

		dataType : "json",

		success : function (data) {

			for(i = 0;i<data.results.length;i++){

				var size = 0;

				country = data.results[i].country;

				name = data.results[i].name;

				type = data.results[i].type;

				url = data.results[i].url;

				//size = data.results[i].size;

				for (j = 0;j<data.results[i].initiatives.length;j++) {

					switch (data.results[i].initiatives[j].pivot.type) {

						case 'Leader' : size = size + 3;

							break;

						case 'Partner' : size = size + 2;

							break;

						case 'Sponsor' : size = size + 1;

							break;

					}

				}

				functional_area = data.results[i].functional_area;

				id = data.results[i].id;

				//alert(countries[i]);

				plotCountry(id, country, name, type, url, functional_area, size);

			}

		}

	});

	//alert(countries[4]);

}

function plotCountry (id, country, name, type, url, functional_area, size) {

	country = country.replace("&", "and");

	//alert(country);

	$.ajax({

		type : "GET",

		url: encodeURI("http://54.68.79.59/stakeholdermap/public/geocodesJSON/" + country),

		dataType : "json",

		success : function (data) {

			//for(i = 0;i<5;i++){

			//alert("Country : " + country + ", Latitude :" + data.results[0].latitude + ", Longitude :" + data.results[0].longitude);

			//}

			//var marker = L.marker([data.results[0].latitude, data.results[0].longitude]).addTo(map);

			iconShade = "http://www.argentmac.com/devca/icons/Aliz.png";

			if (type == "Bank/Investment/Consulting") iconShade = "http://www.argentmac.com/devca/icons/Emerald.png";

			if (type == "Government") iconShade = "http://www.argentmac.com/devca/icons/cloud.png";

			if (type == "Education/Research") iconShade = "http://www.argentmac.com/devca/icons/wetasphalt.png";

			if (type == "NGO") iconShade = "http://www.argentmac.com/devca/icons/sunflower.png";

			if (type == "ICT Services") iconShade = "http://www.argentmac.com/devca/icons/Silver.png";

			if (type == "MNO/Telecommunications") iconShade = "http://www.argentmac.com/devca/icons/Pongrante.png";

			if (type == "Media/Marketing") iconShade = "http://www.argentmac.com/devca/icons/Ametheyst.png";



			switch (country) {

				case "Jamaica" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})
					//title: title
				});

					marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),//sends stakeholder id

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

					jamaica.addLayer(marker);

					break;

				case "Barbados" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})           								//title: title
				});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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


					barbados.addLayer(marker);

					break;

				case "Bahamas" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					bahamas.addLayer(marker);

					break;

				case "Cuba" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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


					cuba.addLayer(marker);

					break;

				case "Haiti" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					haiti.addLayer(marker);

					break;

				case "Anguilla" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					anguilla.addLayer(marker);

					break;

				case "Grenada" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					grenada.addLayer(marker);

					break;

				case "Montserrat" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					montserrat.addLayer(marker);

					break;

				case "Saint Lucia" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					saintlucia.addLayer(marker);

					break;

				case "Saint Vincent" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					saintvincent.addLayer(marker);

					break;

				case "Dominica" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					dominica.addLayer(marker);

					break;

				case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					antigua.addLayer(marker);

					break;

				case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					trinidad.addLayer(marker);

					break;

				case "Saint Kitts" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					saintkitts.addLayer(marker);

					break;

				case "Belize" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					belize.addLayer(marker);

					break;

				case "Guyana" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					guyana.addLayer(marker);

					break;

				case "Suriname" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					suriname.addLayer(marker);

					break;

				case "Grenada" : marker = L.marker(new L.LatLng(data.results[0].latitude, data.results[0].longitude), {
					icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

					grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

					marker.on('click', function () {

						preContent = "<b>Stakeholder</b><br><br>Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "<br><br><b>Initiatives</b><br>";

						$.ajax({

							type: "GET",

							url: encodeURI("http://54.68.79.59/stakeholdermap/public/initiativesJSON/" + id),

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

					grenada.addLayer(marker);

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

	});


}

//BREAK FOR MAP DIV TO BE PLACED - can resolve this with jQuery document.ready


var geocodesData = null;

$.ajax({

	type: "GET",

	url: encodeURI("http://54.68.79.59/stakeholdermap/public/geocodesJSON"),

	dataType: "json",

	success: function (data) {

		geocodesData = data.results;

	}

});

function geoCode (countryname) {

	//alert(geocodesData.length);

	for (var i = 0; i < geocodesData.length; i++) {

		if (geocodesData[i].countryname == countryname) {
			//alert(geocodesData[i].latitude + ", " + geocodesData[i].longitude);
			return geocodesData[i].latitude + ", " + geocodesData[i].longitude;
		}

	}

}

var jamaicanPopupText = barbadosPopupText = bahamasPopupText = cubaPopupText = antiguaPopupText = haitiPopupText = anguillaPopupText = grenadaPopupText = montserratPopupText  = saintluciaPopupText  = saintvincentPopupText  = trinidadPopupText  = dominicaPopupText  = saintkittsPopupText = belizePopupText = guyanaPopupText = surinamePopupText = grenadaPopupText = "<b>Organizations</b><br><br>";

var jamaica = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var barbados = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var bahamas = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var cuba = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var haiti = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var anguilla = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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



var grenada = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var montserrat = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var saintlucia = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var saintvincent = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var trinidad = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var dominica = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var antigua = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var saintkitts = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var belize = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var guyana = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var suriname = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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

var grenada = new L.MarkerClusterGroup({maxClusterRadius: 60,
	iconCreateFunction: null,
	spiderfyOnMaxZoom: true,
	showCoverageOnHover: true,
	zoomToBoundsOnClick: false});

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




var map = L.map('map').setView([14.06, -71.09], 5);
//https://a.tiles.mapbox.com/v4/nickjwill.lcnch31p/page.html?access_token=pk.eyJ1Ijoibmlja2p3aWxsIiwiYSI6Im4xQWFQeTQifQ.bwI5KQmy7z7kS9woXzbplw#6/31.625/40.463
L.tileLayer('http://{s}.tiles.mapbox.com/v4/nickjwill.lcnc6kpo/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoibmlja2p3aWxsIiwiYSI6Im4xQWFQeTQifQ.bwI5KQmy7z7kS9woXzbplw', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
	maxZoom: 8,
	minZoom: 5
}).addTo(map);

getEverything();

map.addLayer(jamaica);

map.addLayer(bahamas);

map.addLayer(belize);

map.addLayer(barbados);

map.addLayer(cuba);map.addLayer(anguilla);map.addLayer(haiti);map.addLayer(grenada);

map.addLayer(montserrat);map.addLayer(saintlucia);map.addLayer(saintvincent);map.addLayer(trinidad);

map.addLayer(dominica);map.addLayer(antigua);map.addLayer(saintkitts);map.addLayer(belize);

map.addLayer(guyana);map.addLayer(suriname);map.addLayer(grenada);

var sidebar = L.control.sidebar('sidebar', {
	position: 'left'
});

map.addControl(sidebar);

sidebar.show();

$(document).ready(function(){

	$(".country-boxes").click(function (event) {

		if (!$("#" + event.target.id).prop("checked")) map.removeLayer(window[event.target.id]);

		else map.addLayer(window[event.target.id]);

	});

	$(".type-boxes").click(function (event) {

		if (!$("#" + event.target.id).prop("checked")) {

			for (var x = 0;x < (window[event.target.id]).length;x++) {

				jamaica.removeLayer((window[event.target.id])[x]);

				//cuba.removeLayer((window[event.target.id])[x]);

			}

		}

		else {

			for (var x = 0;x < (window[event.target.id]).length;x++) {

				jamaica.addLayer((window[event.target.id])[x]);

				//cuba.addLayer((window[event.target.id])[x]);

			}

		}

	});

});


/*for (var x = 0;x < eduArray.length;x++) {

 jamaica.removeLayer(eduArray[x]);

 }*/

function infoSlideDown (element) {

	var subElement = $(element).next().slideToggle("fast");

}
