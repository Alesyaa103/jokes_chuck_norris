import swal from 'sweetalert';
import {
  fetchForm
} from './api.helper';
import {
  templateJoke
} from './joke.component';

const shade = document.getElementById('shade');
const saved = document.getElementById('saved');
const content = document.getElementById('content');

export function displayFavourite() {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.indexOf('key:') + 1) {
      displayJoke(JSON.parse(localStorage.getItem(key)), saved, true)
    }
  }
}

export function showAside(e) {
  saved.classList.toggle('show');
  shade.classList.toggle('none');
}

export function getJoke(e) {
  e.preventDefault();
  let option = document.formSubmit.search.value;

  switch (option) {
    case 'category':
      option = `random?category=${document.formSubmit.category.value}`;
      break;
    case 'search':
      option = `search?query=${document.formSubmit.searchText.value}`;
      break;
    default:
      option = 'random';
  }
  fetchForm(option)
    .then((res) => {
      res ? displayJoke(res, content, false) : swal({
        text: "Joke wasn't find",
        buttons: {
          cancel: "Close",
        }
      });
    })
    .catch((err) => {
      console.log(err)
    })
};

function displayJoke(data, root, isLiked) {
  let {
    updated_at,
    id,
    value,
    categories,
    lastUpdate,
  } = data;

  if (!lastUpdate) {
    const date = new Date(updated_at).getTime();
    const currentDate = new Date().getTime();
    lastUpdate = Math.ceil((currentDate - date) / 3600000);
  }

  const joke = document.createElement('div');
  joke.classList.add('joke');
  root.prepend(joke);
  joke.innerHTML = templateJoke(id, value, categories, lastUpdate, isLiked);
  let items = document.getElementsByClassName(id);
  for (let item of items) {
    item.onclick = changeFavouriteStatus.bind(event, id, value, categories, lastUpdate)
  }
}

function changeFavouriteStatus(id, value, categories, lastUpdate, e) {
  const data = {
    id,
    value,
    categories,
    lastUpdate,
  }

  changeHeart(id);

  if (e.target.checked) {
    localStorage.setItem(`key:${id}`, JSON.stringify({
      "lastUpdate": lastUpdate,
      "id": id,
      "value": value,
      "categories": categories
    }));

    const jokes = document.getElementsByClassName(id)
    if (e.target.closest('.joke').parentNode !== saved && jokes.length === 1) {
      displayJoke(data, saved, true);
      showAside();
    }

  } else {
    localStorage.removeItem(`key:${id}`);
  }
}

function changeHeart(id) {
  const jokes = document.getElementsByClassName(id)
  for (let joke of jokes) {
    joke.parentNode.classList.toggle('joke__mark--checked')
  }
}