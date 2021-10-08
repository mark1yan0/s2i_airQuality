import '../style/style.css'; //webpack handels styles
import { getData } from '../app/services';

export const API_TOKEN = process.env.API_TOKEN;

window.addEventListener('load', () => {
  //on DOM loaded
  let location = document.querySelector('#current-location');

  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(success, fail); //request permission to get position

  function success(position) {
    //getting geolocation
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    location.innerHTML = `<h2 class='location-text'>Your current location<br>Latitude: ${lat.toFixed(
      2
    )}<br> Longitude: ${long.toFixed(2)}</h2>`;
    const api = `https://api.waqi.info/feed/geo:${lat};${long}/?token=${API_TOKEN}`;
    getData(api);
  }

  function fail() {
    //fallback on fixed position (beijing)
    let city = 'beijing';
    location.innerHTML = '';
    const api = `https://api.waqi.info/feed/${city}/?token=${API_TOKEN}`;
    getData(api);
  }
});
//==================================================================================
