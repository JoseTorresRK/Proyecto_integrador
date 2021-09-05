// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 19.35421838768101, lng: -98.973599516797 }; 
  // The map, centered at Uluru
  console.log('id = map',document.getElementById("map"))
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
