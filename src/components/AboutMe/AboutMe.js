import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title.js';
import studentPhoto from '../../images/student__photo.jpg';

function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <Title text="Студент" className="about-me__title" />
      <div className="about-me__card">
        <div className="about-me__info">
          <p className="about-me__name">Виктория</p>
          <p className="about-me__prof">Фронтенд-разработчик, 32&#160;года</p>
          <p className="about-me__about">Я родилась и&#160;живу в&#160;Санкт-Петербурге, закончила факультет прикладной информатики в ИНЖЭКОНе. С&#160;2016 года работала в компании ЮMoney (ex. Яндекс.Деньги). Сейчас нахожусь в&#160;декретном отпуске. Любимое занятие&#160;&#8211; улучить время для&#160;горячего чая найдине с&#160;книжкой.</p>
          <ul className="about-me__social-links">
            <li><a href="https://www.facebook.com/profile.php?id=100006367518821" className="about-me__social-link" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://github.com/khanagua" className="about-me__social-link" target="_blank" rel="noreferrer">Github</a></li>
          </ul>
        </div>
        <img className="about-me__photo" src={studentPhoto} alt="Фотография студента"></img>
      </div>
    </div>
  );
}

export default AboutMe;
