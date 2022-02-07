import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies(props) {
  
  return (
    <div className="movies">
      <SearchForm
        moviesList={props.moviesList}
        setMoviesList={props.setMoviesList}
        setIsResponseWaiting={props.setIsResponseWaiting}
        setIsMoviesListVisibility={props.setIsMoviesListVisibility}
        location={props.location}
        errFormMessage={props.errFormMessage}
        setErrFormMessage={props.setErrFormMessage}
        errFindMessage={props.errFindMessage}
        setErrFindMessage={props.setErrFindMessage}
        isSavedMoviesList={props.isSavedMoviesList}
        savedMovies={props.savedMovies}
      />
      {props.errFindMessage? <span className="movies__error">{props.errFindMessage}</span> : ''}
      {props.isResponseWaiting && <Preloader />}
      {props.isMoviesListVisibility && 
        <MoviesCardList
          resultMoviesList={props.moviesList}
          location={props.location}
          savedMovies={props.savedMovies}
          setSavedMovies={props.setSavedMovies}
          isSavedMoviesList={props.isSavedMoviesList}
        />
      }
    </div>
  );
};

export default Movies;
