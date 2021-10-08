import { info } from '../utilities';

//leaflet map
//==================================================================================
let mymap = L.map('mapid').setView([0, 0], 8); //initialize map and marker
let marker = L.marker([0, 0]).addTo(mymap);

const accessToken =
  'pk.eyJ1IjoibWFya2ttaXQiLCJhIjoiY2tyZXh5bDdsMGZjMTJucW43ejZ5ZmR3bCJ9.boPWZsHWn4LUc1p3M8E1RA';

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token',
  }
).addTo(mymap);

// Displaying data
/* =======================*/
export function displayData(lat, long, cityName, airQuality) {
  //display information
  const city = document.querySelector('.city-name');
  city.textContent = `${cityName}`;

  const location = document.querySelector('.latlong');
  location.textContent = `Latitude: ${lat.toFixed(2)} Longitude: ${long.toFixed(
    2
  )}`;

  const quality = document.querySelector('.air-quality');

  quality.textContent = `${airQuality}`;

  //update map and marker
  mymap.flyTo([lat, long]);
  marker.setLatLng([lat, long]);

  //change background color and display information based on air quality
  let qualityContainer = document.querySelector('.data-container');
  let infoContainer = document.querySelector('.information');

  //good
  if (0 <= airQuality && airQuality <= 50) {
    qualityContainer.style.background =
      'linear-gradient(100deg, rgba(107,218,63,1) 0%, rgba(0,167,25,1) 100%)'; //green
    infoContainer.innerHTML = `<h3>Good</h3><br><p>${info.good[0]}</p><br><p>${info.good[1]}</p>`;
    infoContainer.style.background =
      'linear-gradient(100deg, rgba(107,218,63,1) 0%, rgba(0,167,25,1) 100%)';
  }
  //moderate
  if (51 <= airQuality && airQuality <= 100) {
    qualityContainer.style.background =
      'linear-gradient(248deg, rgba(254,255,93,1) 0%, rgba(255,239,0,1) 100%)'; //yellow
    infoContainer.innerHTML = `<h3>Moderate</h3><br><p>${info.moderate[0]}</p><br><p>${info.moderate[1]}</p>`;
    infoContainer.style.background =
      'linear-gradient(248deg, rgba(254,255,93,1) 0%, rgba(255,239,0,1) 100%)';
  }
  //unhealty for sensitive groups
  if (101 <= airQuality && airQuality <= 150) {
    qualityContainer.style.background =
      'linear-gradient(252deg, rgba(255,177,50,1) 0%, rgba(255,136,0,1) 100%)'; //orange
    infoContainer.innerHTML = `<h3>Unhealty for sensitive groups</h3><br><p>${info.s_unhealthy[0]}</p><br><p>${info.s_unhealthy[1]}</p>`;
    infoContainer.style.background =
      'linear-gradient(252deg, rgba(255,177,50,1) 0%, rgba(255,136,0,1) 100%)';
  }
  //unhealty
  if (151 <= airQuality && airQuality <= 200) {
    qualityContainer.style.background =
      'linear-gradient(252deg, rgba(255,50,50,1) 0%, rgba(255,171,75,1) 100%)'; //red
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Unhealty</h3><br><p>${info.unhealthy[0]}</p><br><p>${info.unhealthy[1]}</p>`;
    infoContainer.style.background =
      'linear-gradient(252deg, rgba(255,50,50,1) 0%, rgba(255,171,75,1) 100%)';
    infoContainer.color = 'white';
  }
  //very unhealty
  if (201 <= airQuality && airQuality <= 300) {
    qualityContainer.style.background =
      'linear-gradient(310deg, rgba(149,0,255,1) 0%, rgba(187,13,255,1) 100%'; //purple
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Very unhealty</h3><br><p>${info.v_unhealthy[0]}</p><br><p>${info.v_unhealthy[1]}</p>`;
    infoContainer.style.background =
      'linear-gradient(310deg, rgba(149,0,255,1) 0%, rgba(187,13,255,1) 100%';
    infoContainer.color = 'white';
  }
  //hazardous
  if (airQuality > 300) {
    qualityContainer.style.background =
      'linear-gradient(125deg, rgba(101,54,0,1) 0%, rgba(170,68,0,1) 100%)'; //brown
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Hazardous</h3><br><p>${info.hazardous[0]}</p><br><p>${info.hazardous[1]}</p>;`;
    infoContainer.style.background =
      'linear-gradient(125deg, rgba(101,54,0,1) 0%, rgba(170,68,0,1) 100%)';
    infoContainer.color = 'white';
  }
}
//==================================================================================
