import './Navigation.css';
import AccountButton from '../AccountButton/AccountButton.js';

function Navigation(props) {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" />
      <span className="navigation__icon"></span>
      <div className="navigation__shade"></div>
      <ul className="navigation__list" id="navigation__list_visible">
        <li className="navigation__item">
          <a href="/" className="navigation__link">Главная</a>
        </li>
        <li className="navigation__item">
          <a href="/movies" className={`navigation__link ${props.href === "movies" ? "navigation__link_active" : ""}`}>Фильмы</a>
        </li>
        <li className="navigation__item">
          <a href="/saved-movies" className={`navigation__link ${props.href === "saved-movies" ? "navigation__link_active" : ""}`}>Сохранённые фильмы</a>
        </li>
        <li className="navigation__item navigation__item__buttom"><AccountButton /></li>
      </ul>
    </div>
  );
}

export default Navigation;
