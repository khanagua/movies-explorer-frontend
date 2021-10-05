import React from 'react';
import './SearchForm.css';


function SearchForm() {
  return (
    <div className="search">
      <form className="search__form" name="SearchForm">
        <div className="search__fieldset">
          <input className="search__input" type="search" name="" placeholder="Фильмы" />
          <button className="search__button" type="submit" aria-label="">Поиск</button>
        </div>
        <div className="search__wrap">
          <div className="search__switch">
            <input type="checkbox" className="search__checkbox" id="search__checkbox" />
            <div className="search__knobs"></div>
            <div className="search__layer"></div>
          </div>
          <label className="search__label" htmlFor="search__checkbox">Короткометражки</label>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
