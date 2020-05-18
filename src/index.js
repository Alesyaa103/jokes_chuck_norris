import {
  showAside,
  getJoke,
  displayFavourite
} from './app/event.helpers';

const saved = document.getElementById('saved');
const show = document.getElementById('showFavourite');

displayFavourite();

show.addEventListener('change', showAside);
document.formSubmit.addEventListener('submit', getJoke)