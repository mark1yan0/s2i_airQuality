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
    qualityContainer.style.background = '#6bd160'; //green
    infoContainer.innerHTML = `<h3>Good</h3><br><p>${info.good[0]}</p><br><p>${info.good[1]}</p>`;
    infoContainer.style.background = '#6bd160';
  }
  //moderate
  if (51 <= airQuality && airQuality <= 100) {
    qualityContainer.style.background = '#fcfa5b'; //yellow
    infoContainer.innerHTML = `<h3>Moderate</h3><br><p>${info.moderate[0]}</p><br><p>${info.moderate[1]}</p>`;
    infoContainer.style.background = '#fcfa5b';
  }
  //unhealty for sensitive groups
  if (101 <= airQuality && airQuality <= 150) {
    qualityContainer.style.background = '#ffb14a'; //orange
    infoContainer.innerHTML = `<h3>Unhealty for sensitive groups</h3><br><p>${info.s_unhealthy[0]}</p><br><p>${info.s_unhealthy[1]}</p>`;
    infoContainer.style.background = '#ffb14a';
  }
  //unhealty
  if (151 <= airQuality && airQuality <= 200) {
    qualityContainer.style.background = '#ff1212'; //red
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Unhealty</h3><br><p>${info.unhealthy[0]}</p><br><p>${info.unhealthy[1]}</p>`;
    infoContainer.style.background = '#ff1212';
    infoContainer.color = 'white';
  }
  //very unhealty
  if (201 <= airQuality && airQuality <= 300) {
    qualityContainer.style.background = '#c800ff'; //purple
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Very unhealty</h3><br><p>${info.v_unhealthy[0]}</p><br><p>${info.v_unhealthy[1]}</p>`;
    infoContainer.style.background = '#c800ff';
    infoContainer.color = 'white';
  }
  //hazardous
  if (airQuality > 300) {
    qualityContainer.style.background = '#a82d00'; //brown
    qualityContainer.color = 'white';
    infoContainer.innerHTML = `<h3>Hazardous</h3><br><p>${info.hazardous[0]}</p><br><p>${info.hazardous[1]}</p>;`;
    infoContainer.style.background = '#a82d00';
    infoContainer.color = 'white';
  }
}
//==================================================================================
