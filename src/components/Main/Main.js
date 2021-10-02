import React from 'react';
import './Main.css';
import Promo from '../Promo/Promo.js';
import NavTab from '../NavTab/NavTab.js';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs.js';
import Student from '../Student/Student.js';

function Main() {
  return (
    <>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <Student />
    </>
  );
}

export default Main;
