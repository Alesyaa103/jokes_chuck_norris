import {
  showAside,
  getJoke,
  displayFavourite
} from './app/event.helpers';

const show = document.getElementById('showFavourite');

displayFavourite();

show.addEventListener('change', showAside);
document.formSubmit.addEventListener('submit', getJoke)