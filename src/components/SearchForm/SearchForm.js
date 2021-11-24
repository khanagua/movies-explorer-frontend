import './SearchForm.css';
import useFormValidation from '../../utils/useFormValidation.js';
import { getMoviesList, filterByKeyword, filterByDuration } from '../../utils/movie.js';

function SearchForm(props) {

  const { values, isValid, handleChange, handleChecked } = useFormValidation({
    movie: "",
    short: false,
  });

  const handleSubmit = (evt) => {
    props.setIsResponseWaiting(true)
    evt.preventDefault();
    
    let intermediateResult = [];
    let result = []

    if (isValid) {
      props.setErrFormMessage("");

      // записываем в переменную массив, по которому будем искать
      !props.isSavedMoviesList ? intermediateResult = getMoviesList() : intermediateResult = props.savedMovies;

      // фильтруем по названию
      let intermediateResultByKeyword = filterByKeyword(intermediateResult, values.movie);

      if (values.short) {
        // фильтруем по длительности
        result = filterByDuration(intermediateResultByKeyword);
      } else {
        result = intermediateResultByKeyword;
      }

      // если ничего не нашли, то возращаем к исходному массиву
      if (result.length === 0) {
        props.setErrFindMessage("Ничего не найдено");
        !props.isSavedMoviesList ? props.setMoviesList(getMoviesList()) : props.setSavedMovies(JSON.parse(localStorage.getItem("savedMovieList")));
        !props.isSavedMoviesList ? props.setIsMoviesListVisibility(false) : props.setIsSavedMoviesListVisibility(false)
      } else {
        // а если нашли, то возращаем новый массив с результатом
        props.setErrFindMessage("");
        !props.isSavedMoviesList ? props.setMoviesList(result) : props.setSavedMovies(result);
        !props.isSavedMoviesList ? props.setIsMoviesListVisibility(true) : props.setIsSavedMoviesListVisibility(true)
      }

    } else {
      props.setErrFormMessage("Нужно ввести ключевое слово");
      !props.isSavedMoviesList ? props.setMoviesList(getMoviesList()) : props.setSavedMovies(JSON.parse(localStorage.getItem("savedMovieList")));
    }

    props.setIsResponseWaiting(false)
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
