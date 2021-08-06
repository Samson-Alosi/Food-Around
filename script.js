let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -1.2921, lng: 36.8219 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}



var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=by-chloe&location=boston";

$.ajax({
   url: myurl,
   headers: {
    'Authorization':'Bearer z-qkakCZ3rS7b4eoI-femfdjNrynoaXCWDuzD49nB9ZB_T9-a1DD4_p3QY_N3ao8Vwf3vSiUX64BKUFGrTeD_15U61MnYLn_e8nOljRpehDFF5Q6x8gQQZBEItYLYXYx',
},
   method: 'GET',
   dataType: 'json',
   success: function(data){
       // Grab the results from the API JSON return
       var totalresults = data.total;
       // If our results are greater than 0, continue
       if (totalresults > 0){
           // Display a header on the page with the number of results
           $('#results').append('<h5>We discovered ' + totalresults + ' results!</h5>');
           // Itirate through the JSON array of 'businesses' which was returned by the API
           $.each(data.businesses, function(i, item) {
               // Store each business's object in a variable
               var id = item.id;
               var alias = item.alias;
               var phone = item.display_phone;
               var image = item.image_url;
               var name = item.name;
               var rating = item.rating;
               var reviewcount = item.review_count;
               var address = item.location.address1;
               var city = item.location.city;
               var state = item.location.state;
               var zipcode = item.location.zip_code;
               // Append our result into our page
               $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
         });
       } else {
           // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
           $('#results').append('<h5>We discovered no results!</h5>');
       }
   }
});    