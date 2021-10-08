import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';


function MoviesCardList(props) {
  const moviesList = props.moviesList;
  const isSaved = props.isSaved;
  return (
    <div className="movies-cards">
      <div className="movies-list">
        {moviesList.map(element => (
          <MoviesCard
            movie = {element}
            key = {element.key}
            isSaved = {isSaved} />
        ))}
      </div>
      <button className="movies-cards__button" type="button">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
