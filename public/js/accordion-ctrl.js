$(document).ready(function(){

        $( ".accordion" ).accordion({
            collapsible: true,
            active: 2
        });

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