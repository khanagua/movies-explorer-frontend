import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="movies-card">
      <div className="movies-card__info">
        <div className="movies-card__wrap">
          <p className="movies-card__name">{props.movie.name}</p>
          <p className="movies-card__duration">{props.movie.duration}</p>
        </div>
        <button
          type="button"
          className={`movies-card__icon
          ${props.isSaved ? "movies-card__icon_type_delete" : "" }
          ${props.movie.save ? "movies-card__icon_type_active" : "movies-card__icon_type_save" }`}
        ></button>
      </div>
      <img src={props.movie.screen} className="movies-card__screen" alt={`Кадр из фильма ${props.movie.name}`} />
    </div>
  );
}

export default MoviesCard;
