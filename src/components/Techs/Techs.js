import React from 'react';
import './Techs.css';
import Title from '../Title/Title.js';

function Techs() {
  return (
    <div className="techs" id="techs">
      <div className="techs__wrapper">
        <Title text="Технологии" className="techs__title" />
        <h3 className="techs__subtitle">7&#160;технологий</h3>
        <p className="techs__description">На&#160;курсе веб-разработки мы освоили технологии, которые применили в&#160;дипломном проекте.</p>
        <ul className="techs__list">
          <li className="techs__item">HTML</li>
          <li className="techs__item">CSS</li>
          <li className="techs__item">JS</li>
          <li className="techs__item">React</li>
          <li className="techs__item">Git</li>
          <li className="techs__item">Express.js</li>
          <li className="techs__item">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
