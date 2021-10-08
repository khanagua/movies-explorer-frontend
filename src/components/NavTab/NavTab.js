import React from 'react';
import './NavTab.css';

function NavTab() {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__list">
        <li><a href="#project" className="nav-tab__link">О&#160;проекте</a></li>
        <li><a href="#techs" className="nav-tab__link">Технологии</a></li>
        <li><a href="#about-me" className="nav-tab__link">Студент</a></li>
      </ul>
    </div>
  );
}

export default NavTab;
