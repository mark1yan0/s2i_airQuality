import { getData } from '../services';
import { API_TOKEN } from '../main';

//declarations

let searchInput = document.querySelector('.search');
let searchButton = document.querySelector('.btn-search');

//search location on input
export function search(e) {
  e.preventDefault();
  let city = searchInput.value;
  const api = `https://api.waqi.info/feed/${city}/?token=${API_TOKEN}`;
  getData(api); //controllare
}

// /*Listeners
// ======================*/
searchButton.addEventListener('click', search);
searchInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') search(e);
});

//==================================================================================
