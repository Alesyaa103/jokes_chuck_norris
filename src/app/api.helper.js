import axios from 'axios';

export async function fetchFunction(option) {
  let jokeContent = null
  try {
    const res = await axios.get(`https://api.chucknorris.io/jokes/${option}`);

    if (res.data.result && res.data.result.length) {
      jokeContent = res.data.result["0"]
    } else if (!res.data.result) {
      jokeContent = res.data
    }
    
    return jokeContent
  } catch (error) {
    return null
  }
}