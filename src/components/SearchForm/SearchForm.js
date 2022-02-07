import './SearchForm.css';
import useFormValidation from '../../utils/useFormValidation.js';
import * as MoviesApi from '../../utils/MoviesApi.js';
import { sortMovies } from '../../utils/movie.js';
import { MESSAGE } from '../../utils/constants.js';

function SearchForm(props) {
    
  const { values, isValid, handleChange, handleChecked } = useFormValidation({
    movie: "",
    short: false,
  });

  let intermediateResult = [];

  const handleSubmit = (evt) => {
    props.setIsResponseWaiting(true);
    evt.preventDefault();
    
    setTimeout(() => {
      if (isValid) {
        props.setErrFormMessage("");
          // смотрим, по какому списку ищем
          if(!props.isSavedMoviesList) {
          // ищем по всем фильмам
            // ищет раннее загруженный список в localStorage
            if (localStorage.getItem("moviesList")) {
              intermediateResult = JSON.parse(localStorage.getItem("moviesList"));
              sortMovies(intermediateResult, values.movie, values.short, props.setMoviesList, props.setErrFindMessage)
            } else {
              // подтягивает список фильмов из api
              MoviesApi.getMovies()
              .then((moviesData) => {
                intermediateResult = moviesData;
                localStorage.setItem("moviesList", JSON.stringify(moviesData));
                sortMovies(intermediateResult, values.movie, values.short, props.setMoviesList, props.setErrFindMessage);
              })
              .catch((err) => {
                props.setErrFindMessage(MESSAGE.requestError);
              })
            }
          } else {
          // ищем по сохраненкам
            intermediateResult = props.savedMovies;
            sortMovies(intermediateResult, values.movie, values.short, props.setSavedMovies, props.setErrFindMessage);
          }
      } else {
        props.setErrFormMessage(MESSAGE.keyword);
      }
      props.setIsResponseWaiting(false);
    }, 600);
  };

  return (
    <div className="search">
      <form className="search__form" name="SearchForm" onSubmit={handleSubmit} noValidate>
        <div className="search__fieldset">
          <input
            className="search__input"
            type="search"
            id="movie"
            name="movie"
            placeholder="Фильмы"
            value={values.movie}
            onChange={handleChange}
            required/>
          <button className="search__button" type="submit" aria-label="Поиск">Поиск</button>
        </div>
        <span className="search__error">{props.errFormMessage}</span>
        <div className="search__wrap">
          <div className="search__switch">
            <input
              type="checkbox"
              className="search__checkbox"
              id="short"
              name="short"
              value={values.short}
              onChange={handleChecked}
            />
            <div className="search__knobs"></div>
            <div className="search__layer"></div>
          </div>
          <label className="search__label" htmlFor="search__checkbox">Короткометражки</label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
