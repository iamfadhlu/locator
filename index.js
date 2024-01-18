// Replace 'YOUR_API_KEY' with your actual API key
const API_KEY = 'your_api';
        
function geocodeAddress() {
    const address = document.getElementById('address').value;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': address }, (results, status) => {
        if (status === 'OK') {
            const location = results[0].geometry.location;
            const latitude = location.lat();
            const longitude = location.lng();
            initMap(latitude, longitude);
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function initMap(latitude, longitude) {
    const mapDiv = document.getElementById('map');
    const map = new google.maps.Map(mapDiv, {
        center: { lat: latitude, lng: longitude },
        zoom: 15
    });

    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: 'Location'
    });
}