function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 54.0000,
            lng: -7.5000
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat:  55.0521, lng: -7.3386 },
        { lat: 53.8023, lng: -8.3043 },
        { lat: 55.2408, lng: -6.5116 },
        { lat: 53.0280, lng: -7.8085 },
        { lat: 52.1585, lng: -7.1444 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}

/*Copied from CI's Map's tutorial and adapted for use on this page*/