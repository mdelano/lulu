// JavaScript Document

// google maps
var map;
function initialize() {


var latlng = new google.maps.LatLng(42.961001,-70.834453);
var styles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        { saturation: -100 }
      ]
    }
];

var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(42.961001,-70.834453),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
      draggable: true,
      streetViewControl: false,
      scrollwheel: false,
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP]
    }
};

map = new google.maps.Map(document.getElementById("map"), mapOptions);
var icons = new google.maps.Marker({
		map: map,
		position: latlng,
		visible: false
	});

var image = 'gmaps/map-location.png';

  var LatLng = new google.maps.LatLng(42.961001,-70.834453);
  var Marker = new google.maps.Marker({
      position: LatLng,
      map: map,
      icon: image,
      url: "https://maps.google.com/maps?q=Lulu+Posh+Hair+Salon+North+Hampton+NH+03862"
	});  

  google.maps.event.addListener(Marker, 'click', function() {
      window.location.href = this.url;
  });

}


google.maps.event.addDomListener(window, 'load', initialize);
