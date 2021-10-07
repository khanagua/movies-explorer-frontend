import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm.js';
// import Preloader from '../Preloader/Preloader.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import { moviesData } from '../../utils/data.js';


function Movies() {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList moviesList={moviesData} />
    </div>
  );
}

export default Movies;
