import { Route, Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation.js';
import AccountButton from '../AccountButton/AccountButton.js';
import { useEffect } from 'react';

function Header(props) {

  useEffect(() => {}, [props.loggedIn])

  return (
    <>

      <Route exact path={["/signin", "/signup"]}>
        <header className="header header_login header_mini">
          <div className="header__wrapper header__wrapper_login">
            <Link to="/" className="header__logo" target="_self"></Link>
          </div>
        </header>
      </Route>
    
      <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
        {props.loggedIn ? 
          <header className={`header ${props.isThemeWhite ? "header_login" : ""}`}>
            <div className="header__wrapper">
              <Link to="/" className="header__logo" target="_self"></Link>
              <div className="header__nav header__nav_hidden">
                <Link to="/movies" className="header__link header__link_bigger">Фильмы</Link>
                <Link to="/saved-movies" className="header__link header__link_bigger" >Сохраненные фильмы</Link>
                <AccountButton />
              </div>
              <Route exact path="/">
                <Navigation href="/"/>
              </Route>
              <Route exact path="/movies">
                <Navigation href="movies"/>
              </Route>
              <Route exact path="/saved-movies">
                <Navigation href="saved-movies" />
              </Route>
              <Route exact path="/profile">
                <Navigation href="profile" />
              </Route>
            </div>
          </header>
        :
          <header className="header">
            <div className="header__wrapper">
              <Link to="/" className="header__logo" target="_self"></Link>
              <div className="header__nav header__nav_main">
                <Link to="/signup" className="header__link">Регистрация</Link>
                <Link to="/signin" className="header__link header__link_type_signin">Войти</Link>
              </div>
            </div>
          </header>
        } 
      </Route>
    </>
  );
}

export default Header;
