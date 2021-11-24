import React from 'react';
import Form from '../Form/Form';
import './Register.css';
import useFormValidation from "../../utils/useFormValidation";

function Register(props) {

  // const [userData, setUserData] = React.useState (
  //   {
  //     name: "Вика",
  //     email: "vika1@ya.ru",
  //     password: "1",
  //   }
  // )

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value
  //   })
  // }

  const { values: userData, errors, handleChange, isValid, resetForm } = useFormValidation(
    {
      name: "",
      email: "",
      password: "",
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = userData;
    props.onRegister(name, email, password);
    resetForm();
  }

  // React.useEffect(() => {
  //   setRequestStatusMessage({
  //     isVisible: false,
  //   });
  // }, [userData]);

  return (
    <div className="register">
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText = "Зарегистрироваться"
        buttonClass = "form__button_register"
        onSubmit={handleSubmit}
        isValid={isValid}
      >
        <label htmlFor="name" className="form__label">Имя</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input"
          minLength="2"
          maxLength="50"
          required
          value={userData.name || ""}
          onChange = {handleChange}
        />
        <span className="form__error">{errors.name || ' '}</span>
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
      <p className="register__footer">Уже зарегистрированы? <a href="/signin" className="register__link">Войти</a></p>
    </div>
  );
}

export default Register;
