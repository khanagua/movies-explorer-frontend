import { Route, Link } from 'react-router-dom';
import './Header.css';
// import iconAccount from '../../images/icon_account.png';
import Navigation from '../Navigation/Navigation.js';
import AccountButton from '../AccountButton/AccountButton.js';

function Header() {
  return (
    <>
    <Route exact path="/">
      <header className="header">
        <div className="header__wrapper">
          <Link to="/" className="header__logo" target="_self"></Link>
          <div className="header__nav header__nav_main">
            <a href="/signin" className="header__link">Регистрация</a>
            <a href="/signup" className="header__link header__link_type_signin">Войти</a>
          </div>
        </div>
      </header>
    </Route>
    <Route exact path={["/movies", "/saved-movies", "/profile"]}>
      <header className="header header_login">
        <div className="header__wrapper">
          <Link to="/" className="header__logo" target="_self"></Link>
          <div className="header__nav">
            <a href="/movies" className="header__link header__link_bigger">Фильмы</a>
            <a href="/saved-movies" className="header__link header__link_bigger" >Сохраненные фильмы</a>
            <AccountButton />
          </div>
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
    </Route>
    <Route exact path={["/signin", "/signup"]}>
      <header className="header header_login header_mini">
        <div className="header__wrapper header__wrapper_login">
          <Link to="/" className="header__logo" target="_self"></Link>
        </div>
      </header>
    </Route>
    </>
  );
}

export default Header;
