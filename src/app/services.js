import { Position } from './utilities';
import { displayData } from './components/data';
import { search } from './components/searchBar';

// /*getting APIs data
// ===============================*/

export async function getData(api) {
  showLoading(); //starts loading
  try {
    const response = await fetch(api);
    const responseData = await response.json(); //getting data

    let position = new Position(
      responseData.data.city.geo[0], //lat
      responseData.data.city.geo[1], //long
      responseData.data.city.name, //city name
      responseData.data.aqi //air quality
    ); //sets new position

    await displayData(
      position.lat,
      position.long,
      position.city,
      position.airQuality
    ); //calling to display data based on new position
  } catch {
    let popup = document.querySelector('.error');
    popup.classList.add('show-error'); //error, location not found
    let searchInput = document.querySelector('.search');
    popup.querySelector('.error-btn').addEventListener('click', e => {
      popup.classList.remove('show-error');
      searchInput.value = '';
    });
  } finally {
    hideLoading(); //hides loading
  }
}

//loading animation
function showLoading() {
  //starts loading animation
  let searching = document.querySelector('.searching');
  let map = document.querySelector('.map-container');
  let data = document.querySelector('.data-container');

  searching.classList.add('show');
  map.classList.add('opacity');
  data.classList.add('opacity');
}

function hideLoading() {
  //finishes loading animation
  let searching = document.querySelector('.searching');
  let map = document.querySelector('.map-container');
  let data = document.querySelector('.data-container');

  searching.classList.remove('show');
  map.classList.remove('opacity');
  data.classList.remove('opacity');
}

//==================================================================================
