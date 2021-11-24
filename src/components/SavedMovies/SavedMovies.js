import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Preloader from '../Preloader/Preloader.js';

function SavedMovies(props) {

  return (
    <div className="saved-movies">
      <SearchForm
        savedMovies={props.savedMovies}
        setSavedMovies={props.setSavedMovies}
        setIsResponseWaiting={props.setIsResponseWaiting}
        setIsSavedMoviesListVisibility={props.setIsSavedMoviesListVisibility}
        location={props.location}
        errFormMessage={props.errFormMessage}
        setErrFormMessage={props.setErrFormMessage}
        errFindMessage={props.errFindMessage}
        setErrFindMessage={props.setErrFindMessage}
        isSavedMoviesList={props.isSavedMoviesList}
      />
      {props.errFindMessage? <span className="movies__error">{props.errFindMessage}</span> : ''}
      {props.isResponseWaiting && <Preloader />}
      {props.isSavedMoviesListVisibility &&
        <MoviesCardList
          resultMoviesList={props.savedMovies}
          location={props.location}
          savedMovies={props.savedMovies}
          setSavedMovies={props.setSavedMovies}
          isSavedMoviesList={props.isSavedMoviesList}
      />
      }
    </div>
  );
}

export default SavedMovies;

