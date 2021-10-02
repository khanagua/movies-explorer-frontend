import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
  return (
    <div className="nav-tab">
      <ul className="nav-tab__list">
        <li><Link to="#" className="nav-tab__link">О&#160;проекте</Link></li>
        <li><Link to="#" className="nav-tab__link">Технологии</Link></li>
        <li><Link to="#" className="nav-tab__link">Студент</Link></li>
      </ul>
    </div>
  );
}

export default NavTab;
