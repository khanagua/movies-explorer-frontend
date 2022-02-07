import React from 'react';
import './Portfolio.css';

function Portfolio() {
  
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__projects">
        <li className="portfolio__item">
          <a href="https://github.com/khanagua/russian-travel" className="portfolio__link" target="_blank" rel="noreferrer">
            <span className="portfolio__link-text">Статичный сайт</span>
            <span className="portfolio__icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/khanagua/how-to-learn" className="portfolio__link" target="_blank" rel="noreferrer">
            <span className="portfolio__link-text">Адаптивный сайт</span>
            <span className="portfolio__icon">&#8599;</span>
          </a>
        </li>
        <li className="portfolio__item">
          <a href="https://github.com/khanagua/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">
            <span className="portfolio__link-text">Одностраничное приложение</span>
            <span className="portfolio__icon">&#8599;</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
