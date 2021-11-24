import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

import Popup from '../Popup/Popup.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Profile from '../Profile/Profile.js';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import PageNotFound from '../PageNotFound/PageNotFound.js';

import * as MainApi from '../../utils/MainApi.js';

function App() {

  const history = useHistory();
  const location = useLocation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [moviesList, setMoviesList] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isResponseWaiting, setIsResponseWaiting] = useState(false);
  const [isMoviesListVisibility, setIsMoviesListVisibility] = useState(true);
  const [isSavedMoviesListVisibility, setIsSavedMoviesListVisibility] = useState(true);
  const [isSavedMoviesList, setIsSavedMoviesList] = useState(false);

  const [errFormMessage, setErrFormMessage] = useState("");
  const [errFindMessage, setErrFindMessage] = useState("");

  // const [];

  useEffect(() => {
    location.pathname === "/movies" ? setIsSavedMoviesList(false) : setIsSavedMoviesList(true);
  }, [location.pathname]);

////  ЗАГРУЗКА ДАННЫХ /////////////////////////////////////////////

  // Запрос инфо пользователя и сохраненок при загрузке страницы
  useEffect(() => {
    Promise.all([MainApi.getUserData(), MainApi.getSavingMoviesData()])
    .then(([userData, moviesData]) => {
      // данные про пользователя
      setCurrentUser(userData);
      setIsLoggedIn(true);
      if (location.pathname === ('/signin' || 'signup')) {
        history.push('/movies');
      } else {
        history.push(location.pathname);
      }
      // данные про сохранненые фильмы
      let moviesDataList = moviesData.filter((movie) => movie.owner === userData._id)
      setSavedMovies(moviesDataList);
      localStorage.setItem("savedMovieList", JSON.stringify(moviesDataList));
    })
    .catch((err) => {
      setIsLoggedIn(false);
      history.push('/signin');
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//// ПОЛЬЗОВАТЕЛЬ /////////////////////////////////////////////////

  function  handleRegister (name, email, password) {
    MainApi.register(name, email, password)
    .then((userData) => {
      setIsPopupOpen(false);
      setIsLoggedIn(true);
      setErrMessage("");
      setCurrentUser({
        name: userData.name,
        email: userData.email
      });
      history.push('/movies');
    })
    .catch(err => {
      if(err === 400) {
        setErrMessage(`Некорректно заполнено одно из полей. Или пользователь уже существует`)
      } else {
        setErrMessage(err.message)
      }
      setIsPopupOpen(true);
    })
  };

  function handleLogin(email, password) {
    MainApi.authorize(email, password)
    .then((res) => {
      if(res === 200) {
        setIsLoggedIn(true);
        setIsPopupOpen(false);
        history.push('/movies');
      } else {
        setErrMessage('Что-то пошло не так')
        setIsPopupOpen(true)
      }
      setErrMessage("");
    })
    .catch(err => {
      switch(err) {
        case 400:
          setErrMessage(`Пользователь с email не найден. Ошибка ${err}`);
          break
        case 401:
          setErrMessage(`Ошибка в почте или пароле. Ошибка ${err}`);
          break
        default:
          setErrMessage(`Ошибка ${err}`);
          break
      }
      setIsPopupOpen(true);
      setIsLoggedIn(false);
    })
  };

  function handleUpdateUser({name, email}) {
    MainApi.changeInfo({name, email})
    .then(newUserData => {
      setCurrentUser(newUserData);
    })
    .catch(err => {
      setIsPopupOpen(true);
      setErrMessage(`Не удалось обновить данные ${err}`)
    })
  };

  function handleLogOut() {
    setIsLoggedIn(false);
    localStorage.clear();
    setCurrentUser({});
    MainApi.signout();
  };

//// ПОПАП ////////////////////////////////////////////////////////

  // Закрывает попап по esc
  function onCloseEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup();
    }
  };

  // Закрывает попап по оверлею
  function onCloseOverlay (evt) {
    if(evt.target.classList.contains('popup_opened')) {
      closePopup();
    };
  };

  // Закрывает попап
  function closePopup() {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    document.addEventListener('keyup', onCloseEsc);
    document.addEventListener('click', onCloseOverlay);

    return () => {
      document.removeEventListener('keyup', onCloseEsc);
      document.removeEventListener('click', onCloseOverlay);
    };
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Header loggedIn={isLoggedIn}/>
            <Main />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <Header loggedIn={isLoggedIn}/>
            <Register onRegister={handleRegister} />
          </Route>
          <Route exact path="/signin">
            <Header loggedIn={isLoggedIn}/>
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute exact path="/movies" loggedIn={isLoggedIn}>
            <Header loggedIn={isLoggedIn}/>
            <Movies
              moviesList={moviesList}
              setMoviesList={setMoviesList}
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}

              location={location}
              errFormMessage={errFormMessage}
              setErrFormMessage={setErrFormMessage}
              errFindMessage={errFindMessage}
              setErrFindMessage={setErrFindMessage}

              isResponseWaiting={isResponseWaiting}
              setIsResponseWaiting={setIsResponseWaiting}
              isMoviesListVisibility={isMoviesListVisibility}
              setIsMoviesListVisibility={setIsMoviesListVisibility}
              isSavedMoviesList={isSavedMoviesList}
              
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/saved-movies" loggedIn={isLoggedIn}>
            <Header loggedIn={isLoggedIn}/>
            <SavedMovies
              savedMovies={savedMovies}
              setSavedMovies={setSavedMovies}

              location={location}
              errFormMessage={errFormMessage}
              setErrFormMessage={setErrFormMessage}
              errFindMessage={errFindMessage}
              setErrFindMessage={setErrFindMessage}

              isResponseWaiting={isResponseWaiting}
              setIsResponseWaiting={setIsResponseWaiting}
              setIsSavedMoviesListVisibility={setIsSavedMoviesListVisibility}
              isSavedMoviesListVisibility={isSavedMoviesListVisibility}
              isSavedMoviesList={isSavedMoviesList}
            />
            <Footer />
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" loggedIn={isLoggedIn} >
            <Header loggedIn={isLoggedIn}/>
            <Profile onLogOut={handleLogOut} onUpdateUser={handleUpdateUser}/>
          </ProtectedRoute>
          <ProtectedRoute exact path='*' loggedIn={isLoggedIn}>
            <PageNotFound/>
          </ProtectedRoute>
        </Switch>
        <Popup
          isOpen={isPopupOpen}
          isMessage={errMessage}
          onClose={closePopup}
          />
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
