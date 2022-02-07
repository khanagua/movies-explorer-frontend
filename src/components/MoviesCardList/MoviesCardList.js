import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';
import { useEffect, useState } from 'react';
import { DEVISE_WIDTH, AMOUNT_CARDS } from '../../utils/constants.js';

function MoviesCardList(props) {

  const [renderedMovies, setRenderedMovies] = useState(0);
  const [moviesRenderMore, setMoviesRenderMore] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let resizeTimeout = null;

  const updateWindowWidth = () => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(() => setWindowWidth(window.innerWidth), 1500);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => window.removeEventListener('resize', updateWindowWidth);
  });

  useEffect(() => {
    if (props.location.pathname === "/movies") {
      if (windowWidth <= DEVISE_WIDTH) {
        setRenderedMovies(AMOUNT_CARDS.five);
        setMoviesRenderMore(AMOUNT_CARDS.five);
      } else {
        setRenderedMovies(AMOUNT_CARDS.seven);
        setMoviesRenderMore(AMOUNT_CARDS.seven);
      }
    } else {
      if (windowWidth <= DEVISE_WIDTH) {
        setRenderedMovies(AMOUNT_CARDS.three);
        setMoviesRenderMore(AMOUNT_CARDS.three);
      } else {
        setRenderedMovies(AMOUNT_CARDS.two);
        setMoviesRenderMore(AMOUNT_CARDS.two);
      }
    }
  }, [windowWidth, props.location, props.resultMoviesList.length]);


  const handleMore = () => {
    setRenderedMovies(renderedMovies + moviesRenderMore);
  };

  return (
    <div className="movies-cards">
      <div className="movies-list">
        {props.resultMoviesList.reduce((moviesToRender, movie) => {
          if (moviesToRender.length < renderedMovies) {
            if (movie.id) {
              moviesToRender.push(
                <MoviesCard
                  movie={movie}
                  key={props.location.pathname === "/movies" ? movie.id : movie.movieId}
                  location={props.location.pathname}
                  savedMovies={props.savedMovies}
                  setSavedMovies={props.setSavedMovies}
                  isSavedMoviesList={props.isSavedMoviesList}
                />,
              );
            }
            if (movie.movieId) {
              moviesToRender.push(
                <MoviesCard
                  movie={movie}
                  key={props.location.pathname === "/movies" ? movie.id : movie.movieId}
                  location={props.location.pathname}
                  savedMovies={props.savedMovies}
                  setSavedMovies={props.setSavedMovies}
                  isSavedMoviesList={props.isSavedMoviesList}
                />,
              );
            }
          }
          return moviesToRender;
        }, [])}
      </div>
      {props.resultMoviesList.length > renderedMovies && <button className="movies-cards__button" onClick={handleMore}>Ещё</button>}
    </div>
  );

};

export default MoviesCardList;
