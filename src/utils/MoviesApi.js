import { MOVIES_URL } from './constants.js';

const _checkResponse = (result) => {
  return result.ok ? result.json() : Promise.reject(`Ошибка: ${result.status}`);
};

export const getMovies = () => {
  return fetch(MOVIES_URL, {
    method: 'GET',
  })
    .then(_checkResponse);
}
