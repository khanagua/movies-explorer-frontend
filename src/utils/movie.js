import * as MainApi from './MainApi.js';
import { MESSAGE, DURATION_SHORT_MOVIE } from '../utils/constants.js';

// возвращает фильмы, которые содержат ключевое слово в названии
export const filterByKeyword = (moviesList, keyWord) => {
  let results = moviesList.filter(movie => movie.nameRU.toLowerCase().includes(keyWord.trim().toLowerCase()));
  return results;
};

// возвращает короткие фильмы
export const filterByDuration = (movies) => {
  let results = movies.filter((movie) => movie.duration <= DURATION_SHORT_MOVIE);
  return results;
};

// выстраивает порядок сортировки фильмов
export const sortMovies = (intermediateResult, keywords, isShort, setList, setErrFindMessage) => {
  // фильтруем по названию
  let intermediateResultByKeyword = filterByKeyword(intermediateResult, keywords);
  // фильтруем по длительности
  if (isShort) {
    intermediateResultByKeyword = filterByDuration(intermediateResultByKeyword);
    setList(intermediateResultByKeyword);
  } else {
    setList(intermediateResultByKeyword);
  }
  // проверяем, есть ли фильмы, подходящие под запрос
  if(intermediateResultByKeyword.length === 0) {
    setErrFindMessage(MESSAGE.notFound);
  } else {
    setErrFindMessage("");
  }
};

// добавляет фильм в избранное
export const addMovie = (movie, savedMovies, setSavedMovies) => {
  MainApi.addMovieCard(
    {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co${movie.image.url}`,
      trailer: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }
  )
  .then(res => {
    setSavedMovies(
      [
        ...savedMovies,
        res
      ]
    );
  })
  .catch(err => console.log(err))
};

// удаляет фильм из избранного
export const deleteMovie = (deleteMovieId, setSavedMovies) => {
  MainApi.deleteMovieCard(deleteMovieId)
  .then(res => {
    setSavedMovies(prev => prev.filter(item => item._id !== deleteMovieId));
  })
  .catch(err => {
    console.log(err);
  })
};