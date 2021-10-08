import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import { SavedMoviesData } from '../../utils/data.js';


function SavedMovies(props) {
  const isSaved = props.isSaved;
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesList = {SavedMoviesData} isSaved = {isSaved} />
    </div>
  );
}

export default SavedMovies;
