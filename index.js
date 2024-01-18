function geocodeAddress(address) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            var location = results[0].geometry.location;
            var latitude = location.lat();
            var longitude = location.lng();
            console.log('Latitude: ' + latitude + ', Longitude: ' + longitude);

            // Create a LatLng object for the map center
            var mapCenter = new google.maps.LatLng(latitude, longitude);

            // Initialize the map
            const map = new google.maps.Map(
                document.querySelector("div"), { // Assuming you have an element with id="map"
                    zoom: 15, // Adjust the zoom level as needed
                    center: mapCenter
                }
            );
            var bounds = new google.maps.LatLngBounds();
            bounds.extend(mapCenter);

            // Extend the bounds for additional points if needed
            // bounds.extend(anotherLatLng);

            // Fit the map to the bounds
            map.fitBounds(bounds);
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function Submit(event) {
    event.preventDefault();
    var address = document.getElementById("address").value;
    console.log(address);
    geocodeAddress(address);
}

document.getElementById("myForm").addEventListener("submit", Submit);

