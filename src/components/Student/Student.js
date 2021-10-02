import React from 'react';
import { Link } from 'react-router-dom';
import './Student.css';
import Title from '../Title/Title.js';
import studentPhoto from '../../images/student__photo.jpg';

function Student() {
  return (
    <div className="student">
      <Title text="Студент" className="student__title" />
      <section className="student__card">
        <div className="student__info">
          <p className="student__name">Виталий</p>
          <p className="student__prof">Фронтенд-разработчик, 30&#160;лет</p>
          <p className="student__about">Я родился и&#160;живу в&#160;Саратове, закончил факультет экономики СГУ. У&#160;меня есть жена 
и&#160;дочь. Я люблю слушать музыку, а&#160;ещё увлекаюсь бегом. Недавно начал кодить. С&#160;2015 года работал в&#160;компании «СКБ&#160;Контур». После того, как прошёл курс по&#160;веб-разработке, начал заниматься фриланс-заказами и&#160;ушёл с&#160;постоянной работы.</p>
          <ul className="student__social-links">
            <li><Link to="#" className="student__social-link">Facebook</Link></li>
            <li><Link to="#" className="student__social-link">Github</Link></li>
          </ul>
        </div>
        <img className="student__photo" src={studentPhoto} alt="Фотография студента"></img>
      </section>
      <section className="student__portfolio">
        <h2 className="student__subtitle">Портфолио</h2>
        <ul className="student__projects">
          <li className="student__item">
            <Link to="#" className="student__link">
              <span className="student__link-text">Статичный сайт</span>
              <span className="student__icon">&#8599;</span>
            </Link>
          </li>
          <li className="student__item">
            <Link to="#" className="student__link">
              <span className="student__link-text">Адаптивный сайт</span>
              <span className="student__icon">&#8599;</span>
            </Link>
          </li>
          <li className="student__item">
            <Link to="#" className="student__link">
              <span className="student__link-text">Facebook</span>
              <span className="student__icon">&#8599;</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Student;
