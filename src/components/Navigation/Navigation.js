import './Navigation.css';
import AccountButton from '../AccountButton/AccountButton.js';
import { Link } from 'react-router-dom';

function Navigation(props) {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" />
      <span className="navigation__icon"></span>
      <div className="navigation__shade"></div>
      <ul className="navigation__list" id="navigation__list_visible">
        <li className="navigation__item">
          <Link to="/" className={`navigation__link ${props.href === "/" ? "navigation__link_active" : ""}`}>Главная</Link>
        </li>
        <li className="navigation__item">
          <Link to="/movies" className={`navigation__link ${props.href === "movies" ? "navigation__link_active" : ""}`}>Фильмы</Link>
        </li>
        <li className="navigation__item">
          <Link to="/saved-movies" className={`navigation__link ${props.href === "saved-movies" ? "navigation__link_active" : ""}`}>Сохранённые фильмы</Link>
        </li>
        <li className="navigation__item navigation__item__buttom"><AccountButton /></li>
      </ul>
    </div>
  );
}

export default Navigation;
