import { Route, Link } from 'react-router-dom';
import './Header.css';
import iconAccount from '../../images/icon_account.png';

function Header(props) {
  return (
    <header className={`header ${props.isLogin ? "header_login" : ""}`}>
      <Route exact path="/">
        <div className="header__wrapper">
          <a href="##" className="header__logo" target="_self">
          </a>
          <div className="header__nav header__nav_main">
            <Link to="/sign-in" className="header__link">Регистрация</Link>
            <Link to="/sign-up" className="header__link header__link_type_signin">Войти</Link>
          </div>
        </div>
      </Route>
      <Route exact path={["/movies", "/saved-movies", "/profile"]}>
        <div className="header__wrapper">
          <a href="##" className="header__link logo" target="_self">
          </a>
          <div className="header__nav">
            <Link to="#" className="header__link header__link_bigger">Фильмы</Link>
            <Link to="#" className="header__link header__link_bigger" >Сохраненные фильмы</Link>
            <Link to="#" className="header__link header__link_bigger header__link_type_account">
              <span>Аккаунт</span>
              <img src={iconAccount} alt="Переход в аккаунт" className="header__image" />
            </Link>
          </div>
        </div>
      </Route>
      <Route exact path={["/sign-in", "/sign-up"]}>
        <div className="header__wrapper header__wrapper_login">
          <a href="##" className="header__link logo" target="_self">
          </a>
        </div>
      </Route>
    </header>
  );
}

export default Header;
