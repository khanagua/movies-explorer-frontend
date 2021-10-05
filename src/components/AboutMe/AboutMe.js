import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import Title from '../Title/Title.js';
import studentPhoto from '../../images/student__photo.jpg';

function AboutMe() {
  return (
    <div className="about-me">
      <Title text="Студент" className="about-me__title" />
      <div className="about-me__card">
        <div className="about-me__info">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__prof">Фронтенд-разработчик, 30&#160;лет</p>
          <p className="about-me__about">Я родился и&#160;живу в&#160;Саратове, закончил факультет экономики СГУ. У&#160;меня есть жена 
и&#160;дочь. Я люблю слушать музыку, а&#160;ещё увлекаюсь бегом. Недавно начал кодить. С&#160;2015 года работал в&#160;компании «СКБ&#160;Контур». После того, как прошёл курс по&#160;веб-разработке, начал заниматься фриланс-заказами и&#160;ушёл с&#160;постоянной работы.</p>
          <ul className="about-me__social-links">
            <li><Link to="#" className="about-me__social-link">Facebook</Link></li>
            <li><Link to="#" className="about-me__social-link">Github</Link></li>
          </ul>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="Фотография студента"></img>
      </div>
    </div>
  );
}

export default AboutMe;
