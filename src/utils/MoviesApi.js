import { MOVIES_URL } from './constants.js';
import { MESSAGE } from './constants.js';

const _checkResponse = (result) => {
  return result.ok ? result.json() : Promise.reject(`${MESSAGE.error} ${result.status}`);
};

export const getMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
  })
    .then(_checkResponse);
}
