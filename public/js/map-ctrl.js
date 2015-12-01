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
	
	//alert("Getting everything!");

	var countries = [];

	$.ajax({

		type: "GET",

		url: "http://localhost:3000/stakeholders",

		dataType : "json",

		success : function (data) {

			for(i = 0;i<data.length;i++){

				var size = 0;

				country = data[i].country.name;

				name = data[i].name;

				type = data[i].category.name;

				url = data[i].url;

				//size = data.results[i].size;

				/*for (j = 0;j<data.results[i].initiatives.length;j++) {

				 switch (data.results[i].initiatives[j].pivot.type) {

				 case 'Leader' : size = size + 3;

				 break;

				 case 'Partner' : size = size + 2;

				 break;

				 case 'Sponsor' : size = size + 1;

				 break;

				 }

				 }*/

				functional_area = data[i].functionalArea.name;

				latitude = data[i].country.latitude;

				longitude = data[i].country.longitude;

				id = data[i].id;

				//alert(countries[i]);

				plotCountry(id, country, name, type, url, functional_area, size, latitude, longitude);

				//alert(country);

			}

		}

	});

	//alert(countries[4]);

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {


	//for(i = 0;i<5;i++){

	//alert("Country : " + country + ", Latitude :" + latitude + ", Longitude :" + longitude);

	//}

	//var marker = L.marker([latitude, longitude]).addTo(map);

	iconShade = "http://www.argentmac.com/devca/icons/Aliz.png";

	if (type == "Bank/Investment/Consulting") iconShade = "http://www.argentmac.com/devca/icons/Emerald.png";

	if (type == "Government") iconShade = "http://www.argentmac.com/devca/icons/cloud.png";

	if (type == "Education/Research") iconShade = "http://www.argentmac.com/devca/icons/wetasphalt.png";

	if (type == "NGO") iconShade = "http://www.argentmac.com/devca/icons/sunflower.png";

	if (type == "ICT Services") iconShade = "http://www.argentmac.com/devca/icons/Silver.png";

	if (type == "MNO/Telecommunications") iconShade = "http://www.argentmac.com/devca/icons/Pongrante.png";

	if (type == "Media/Marketing") iconShade = "http://www.argentmac.com/devca/icons/Ametheyst.png";



	switch (country) {

		case "Jamaica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})
			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			jamaica.addLayer(marker);

			break;

		case "Barbados" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})           								//title: title
		});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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


			barbados.addLayer(marker);

			break;

		case "Bahamas" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			bahamas.addLayer(marker);

			break;

		case "Cuba" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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


			cuba.addLayer(marker);

			break;

		case "Haiti" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			haiti.addLayer(marker);

			break;

		case "Anguilla" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			anguilla.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			grenada.addLayer(marker);

			break;

		case "Montserrat" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			montserrat.addLayer(marker);

			break;

		case "Saint Lucia" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			saintlucia.addLayer(marker);

			break;

		case "Saint Vincent" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			saintvincent.addLayer(marker);

			break;

		case "Dominica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			dominica.addLayer(marker);

			break;

		case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			antigua.addLayer(marker);

			break;

		case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			trinidad.addLayer(marker);

			break;

		case "Saint Kitts" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			saintkitts.addLayer(marker);

			break;

		case "Belize" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			belize.addLayer(marker);

			break;

		case "Guyana" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			guyana.addLayer(marker);

			break;

		case "Suriname" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			suriname.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			icon:	new L.NumberedDivIcon({number: size, iconUrl : iconShade})        										});

//marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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
