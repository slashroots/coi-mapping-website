var geocodesData = null;

    $.ajax({

        type: "GET",

        url: encodeURI("countries"),

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