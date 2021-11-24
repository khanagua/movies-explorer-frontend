import React from 'react';
import Form from '../Form/Form';
import './Login.css';
import useFormValidation from "../../utils/useFormValidation";

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js';


function Login(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const { values: userData, errors, handleChange, isValid, resetForm } = useFormValidation(
    {
      email: currentUser.email,
      password: "",
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = userData;
    props.onLogin(email, password);
    resetForm();
  }

  return (
    <div className="login">
      <Form
        name="login"
        title="Рады видеть!"
        buttonText = "Войти"
        buttonClass = "form__button_login"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input"
          required
          value={userData.email || ""}
          onChange = {handleChange}
        />
        <span className="form__error">{errors.email || ' '}</span>
        <label htmlFor="password" className="form__label">Пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input"
          required
          value={userData.password || ""}
          onChange = {handleChange}
        />
        <span className="form__error">{errors.password || ' '}</span>
      </Form>
      <p className="login__footer">Ещё не зарегистрированы? <a href="/signup" className="login__link">Регистрация</a></p>
    </div>
  );
}

export default Login;
