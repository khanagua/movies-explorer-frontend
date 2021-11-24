import React from 'react';
import './Profile.css';
import useFormValidation from "../../utils/useFormValidation";

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const { values: userData, errors, handleChange, isValid, resetForm } = useFormValidation(
    {
      name: "",
      email: "",
      password: "",
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser(userData);
    resetForm();
  }

  return (
    <div className="profile">
      <h1 className="profile__title">Привет, {currentUser.name}!</h1>
      <form
        className="profile__form"
        name="profile"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <div className="profile__wrap">
          <label htmlFor="name" className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            id="name"
            className="profile__input"
            minLength="2"
            maxLength="50"
            placeholder={currentUser.name}
            required
            value={userData.name || ""}
            onChange = {handleChange}
          />
        </div>
        <div className="profile__wrap">
          <label htmlFor="email" className="profile__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="profile__input"
            placeholder={currentUser.email}
            required
            value={userData.email || ""}
            onChange = {handleChange}
          />
        </div>
        <div className="profile__error">{errors.name || ' '}</div>
        <div className="profile__error">{errors.email || ' '}</div>
        <button className="profile__button" type="submit" aria-label="Редактировать">Редактировать</button>
      </form>
      <button onClick={props.onLogOut} className="profile__exit">Выйти из аккаунта</button>
    </div>
  );
}

export default Profile;
