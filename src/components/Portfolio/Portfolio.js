import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__item">
          <Link to="#" className="portfolio__link">
            <span className="portfolio__link-text">Статичный сайт</span>
            <span className="portfolio__icon">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="#" className="portfolio__link">
            <span className="portfolio__link-text">Адаптивный сайт</span>
            <span className="portfolio__icon">&#8599;</span>
          </Link>
        </li>
        <li className="portfolio__item">
          <Link to="#" className="portfolio__link">
            <span className="portfolio__link-text">Одностраничное приложение</span>
            <span className="portfolio__icon">&#8599;</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
