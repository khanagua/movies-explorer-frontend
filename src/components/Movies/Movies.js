import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';


function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}

export default Movies;
