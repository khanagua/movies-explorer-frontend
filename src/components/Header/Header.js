import { Route, Link } from 'react-router-dom';
import './Header.css';
// import iconAccount from '../../images/icon_account.png';
import Menu from '../Menu/Menu.js';
import AccountButton from '../AccountButton/AccountButton.js';

function Header() {
  return (
    <>
    <Route exact path="/">
      <header className="header">
        <div className="header__wrapper">
          <a href="##" className="header__logo" target="_self">
          </a>
          <div className="header__nav header__nav_main">
            <Link to="/sign-in" className="header__link">Регистрация</Link>
            <Link to="/sign-up" className="header__link header__link_type_signin">Войти</Link>
          </div>
        </div>
      </header>
    </Route>
    <Route exact path={["/movies", "/saved-movies", "/profile"]}>
      <header className="header header_login">
        <div className="header__wrapper">
          <a href="##" className="header__logo" target="_self">
          </a>
          <div className="header__nav">
            <Link to="#" className="header__link header__link_bigger">Фильмы</Link>
            <Link to="#" className="header__link header__link_bigger" >Сохраненные фильмы</Link>
            <AccountButton />
          </div>
          <Route exact path="/movies">
            <Menu href="movies"/>
          </Route>
          <Route exact path="/saved-movies">
            <Menu href="saved-movies" />
          </Route>
          <Route exact path="/profile">
            <Menu href="profile" />
          </Route>
        </div>
      </header>
    </Route>
    <Route exact path={["/sign-in", "/sign-up"]}>
      <header className="header header_login">
        <div className="header__wrapper header__wrapper_login">
          <a href="##" className="header__logo" target="_self">
          </a>
        </div>
      </header>
    </Route>
    </>
  );
}

export default Header;
