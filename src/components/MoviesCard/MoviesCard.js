import './MoviesCard.css';
import { addMovie, deleteMovie } from '../../utils/movie.js';
import { useEffect } from 'react';

function MoviesCard(props) {

  let isSavedMovie = props.savedMovies.some(movie => movie.nameRU.toLowerCase().includes(props.movie.nameRU.toLowerCase()));

  useEffect(() => {
  }, [props.savedMovies])

  function handleSaving (evt) {
    evt.preventDefault();
    addMovie(props.movie, props.savedMovies, props.setSavedMovies);
  };

  function handleDelete (evt) {
    let deleteMovieId;

    if (props.location === "/movies") {        
      deleteMovieId = props.savedMovies.find(movie => movie.movieId === props.movie.id)._id;
      console.log(deleteMovieId)
    } else {
      deleteMovieId = props.movie._id;
    }

    evt.preventDefault();
    deleteMovie(deleteMovieId, props.setSavedMovies);
  };

  return (
    <a href={props.location === "/movies" ? props.movie.trailerLink : props.movie.trailer} target="_blank" rel="noreferrer" className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__wrap">
          <p className="movies-card__name">{props.movie.nameRU || props.movie.nameEN}</p>
          <p className="movies-card__duration">{props.movie.duration}</p>
        </div>

        {props.isSavedMoviesList && 
        <button
          type="button"
          className="movies-card__icon movies-card__icon_type_delete"
          onClick={handleDelete}
        ></button>}
        
        {!props.isSavedMoviesList &&
        <button
          type="button"
          className={`movies-card__icon ${isSavedMovie ? "movies-card__icon_type_active" : "movies-card__icon_type_save" }`}
          onClick={isSavedMovie ? handleDelete : handleSaving}
        ></button>}

      </div>
      <img
        className="movies-card__screen"
        src={props.location === "/movies" ? `https://api.nomoreparties.co${props.movie.image.url}` : props.movie.image}
        alt={`Кадр из фильма ${props.movie.nameRU || props.movie.nameEN}`} />
    </a>
  );
};

export default MoviesCard;
