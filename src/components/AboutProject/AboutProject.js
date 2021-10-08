import React from 'react';
import './AboutProject.css';
import Title from '../Title/Title.js';

function AboutProject() {
  return (
    <div className="project" id="project">
      <Title text="О проекте" className="project__title" />
      <ul className="project__list">
        <li className="project__item">
          <h3 className="project__subtitle">Дипломный проект включал 5&#160;этапов</h3>
          <p className="project__text">Составление плана, работу над&#160;бэкендом, вёрстку, добавление функциональности и&#160;финальные доработки.</p>
        </li>
        <li className="project__item">
          <h3 className="project__subtitle">На&#160;выполнение диплома ушло 5&#160;недель</h3>
          <p className="project__text">У&#160;каждого этапа был мягкий и&#160;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <table className="project__timing">
        <tbody>
          <tr>
            <td className="project__cell project__cell_dark">1&#160;неделя</td>
            <td className="project__cell project__cell_light">4&#160;недели</td>
          </tr>
          <tr>
            <th className="project__cell project__cell_header">Back-end</th>
            <th className="project__cell project__cell_header">Front-end</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutProject;
