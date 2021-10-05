import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { moviesData } from '../../utils/data.js';


function MoviesCardList() {
  return (
    <div className="movies-cards">
      <div className="movies-list">
        <MoviesCard movie = {moviesData[0]} />
        <MoviesCard movie = {moviesData[1]} />
        <MoviesCard movie = {moviesData[2]} />
        <MoviesCard movie = {moviesData[3]} />
        <MoviesCard movie = {moviesData[4]} />
        <MoviesCard movie = {moviesData[5]} />
        <MoviesCard movie = {moviesData[6]} />
      </div>
      <button className="movies-cards__button" type="button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
