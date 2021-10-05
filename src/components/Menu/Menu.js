import { Link } from 'react-router-dom';
import './Menu.css';
import AccountButton from '../AccountButton/AccountButton.js';

function Menu(props) {
  return (
    <div className="menu">
      {/* <div className="menu__toggler" id="menu__toggler"> */}
        <input type="checkbox" className="menu__checkbox" />
        <span className="menu__icon"></span>
        <div className="menu__shade"></div>
      {/* </div> */}
      <ul className="menu__list" id="menu__list_visible">
        <li className="menu__item">
          <Link to="#" className="menu__link">Главная</Link>
        </li>
        <li className="menu__item">
          <Link to="#" className={`menu__link ${props.href === "movies" ? "menu__link_active" : ""}`}>Фильмы</Link>
        </li>
        <li className="menu__item">
          <Link to="#" className={`menu__link ${props.href === "saved-movies" ? "menu__link_active" : ""}`}>Сохранённые фильмы</Link>
        </li>
        <li className="menu__item menu__item__buttom"><AccountButton /></li>
      </ul>
    </div>
  );
}

export default Menu;
