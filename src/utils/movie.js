import * as MoviesApi from './MoviesApi.js';
import * as MainApi from './MainApi.js';

export const getMoviesList = () => {

  let moviesList = [];

  // ищет раннее загруженный список в localStorage
  if (localStorage.getItem('moviesList')) {
    moviesList = JSON.parse(localStorage.getItem('moviesList'));
  } else (
    // подтягивает список фильмов из api
    MoviesApi.getMovies()
    .then((moviesData) => {
      moviesList = moviesData;
      localStorage.setItem('moviesList', JSON.stringify(moviesData));
    })
    .catch((err) => {
      moviesList = [];
      // setErrFindMessage("Ничего не найдено");
    })
  )
  return moviesList;
};

export const filterByKeyword = (moviesList, keyWord) => {
  let results = moviesList.filter(movie => movie.nameRU.toLowerCase().includes(keyWord.trim().toLowerCase()));
  // console.log(results);
  return results;
};

export const filterByDuration = (movies) => {
  // console.log('пришел забрать')
  // console.log(movies);
  let results = movies.filter((movie) => movie.duration <= 40);
  return results;
};

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

export const deleteMovie = (deleteMovieId, setSavedMovies) => {
  MainApi.deleteMovieCard(deleteMovieId)
  .then(res => {
    setSavedMovies(prev => prev.filter(item => item._id !== deleteMovieId));
  })
  .catch(err => {
    console.log(err);
  })
};
