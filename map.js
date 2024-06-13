// map.js
function initMap() {
    var location = { lat: -20.897144, lng: 55.5029843 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
