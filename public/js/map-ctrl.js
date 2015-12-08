var marker = null;

var bankArray = Array(0);

var govArray = Array(0);

var eduArray = Array(0);

var ngoArray = Array(0);

var ictArray = Array(0);

var mnoArray = Array(0);

var mediaArray = Array(0);

var bankToggle = eduToggle = ictToggle = ictToggle2 = govToggle = mediaToggle = mnoToggle = ngoToggle = true;

//alert(bankArray[1]);

var iconShade = "http://www.argentmac.com/devca/icons/Aliz.jpg";

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

		}

	});

	//alert(countries[4]);

}

function plotCountry (id, country, name, type, url, functional_area, size, latitude, longitude) {

	iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Bank/Investment/Consulting") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Government") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Education/Research") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "NGO") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "ICT Services") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "MNO/Telecommunications") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	if (type == "Media/Marketing") iconShade = "http://www.clker.com/cliparts/k/Q/V/D/z/u/map-marker-small-md.png";

	switch (country) {

		case "Jamaica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			
			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) jamaicanPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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
			
			if (shouldTypeBeDrawn(type)) jamaica.addLayer(marker);

			break;

		case "Barbados" : marker = L.marker(new L.LatLng(latitude, longitude), {
			            								//title: title
		});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) barbadosPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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


			if (shouldTypeBeDrawn(type)) barbados.addLayer(marker);

			break;

		case "Bahamas" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) bahamasPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) bahamas.addLayer(marker);

			break;

		case "Cuba" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) cubaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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


			if (shouldTypeBeDrawn(type)) cuba.addLayer(marker);

			break;

		case "Haiti" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) haitiPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) haiti.addLayer(marker);

			break;

		case "Anguilla" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) anguillaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) anguilla.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) grenada.addLayer(marker);

			break;

		case "Montserrat" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) montserratPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) montserrat.addLayer(marker);

			break;

		case "Saint Lucia" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintluciaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) saintlucia.addLayer(marker);

			break;

		case "Saint Vincent" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintvincentPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) saintvincent.addLayer(marker);

			break;

		case "Dominica" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) dominicaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) dominica.addLayer(marker);

			break;

		case "Antigua and Barbuda" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) antiguaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) antigua.addLayer(marker);

			break;

		case "Trinidad and Tobago" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) trinidadPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) trinidad.addLayer(marker);

			break;

		case "Saint Kitts" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) saintkittsPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) saintkitts.addLayer(marker);

			break;

		case "Belize" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) belizePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) belize.addLayer(marker);

			break;

		case "Guyana" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) guyanaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) guyana.addLayer(marker);

			break;

		case "Suriname" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) surinamePopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) suriname.addLayer(marker);

			break;

		case "Grenada" : marker = L.marker(new L.LatLng(latitude, longitude), {
			         										});

marker.bindPopup("Name : " + name + "<br><br>Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) grenadaPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) grenada.addLayer(marker);

			break;

		case "Global" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) globalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) global.addLayer(marker);

			break;

		case "Regional" : marker = L.marker(new L.LatLng(latitude, longitude), {

			//title: title
		});

			marker.bindPopup("Name : " + name + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area);

			if (shouldTypeBeDrawn(type)) regionalPopupText += "<div class='organization-name'><a href='#' onclick='infoSlideDown(this);return false;'><b>" + name + "</b></a><p style='display:none;' class='organization-content'>" + "Type : " + type + "<br><br>Website : " + url + "<br><br>Functional Area : " + functional_area + "</p></div><br>";

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

			if (shouldTypeBeDrawn(type)) regional.addLayer(marker);

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

putLayersOnMap();

}
