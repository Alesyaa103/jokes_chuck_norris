import message from '../assets/message.svg';
import link from '../assets/link.svg'

export function templateJoke(id, value, categories, lastUpdate, isLiked) {
  return `<img src=${message} class='joke__img'> 
      <div class='joke__wraper'>
      <div class='joke__id id'>
      <span class='joke__secondary'>ID:</span>
      <p class="id__value"> ${id}</p>
      <img src=${link} class='id__symbol'>
      </div>
      <p class="joke__text"> ${value} </p>
      <div class="joke__info">
      <span class='joke__secondary'>Last update: ${lastUpdate} hours ago</span>
      ${(categories) && (categories.length !== 0) ? `<span class='categories__mark'>${categories}</span>` : ''}
      </div>
      <label class='joke__mark ${(isLiked)? 'joke__mark--checked':''}'>
      <input type="checkbox" class='joke__check ${id}' name="favourite" ${(isLiked)?'checked ':''}>
      </label>
      </div>`
}