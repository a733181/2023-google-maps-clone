mapboxgl.accessToken = 'Your Token';

navigator.geolocation.getCurrentPosition(
  successLocationHandler,
  errorLocationHandler,
  {
    enableHighAccuracy: true,
  }
);

function successLocationHandler(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocationHandler() {
  setupMap([139.691706, 35.689487]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, 'top-left');
}
