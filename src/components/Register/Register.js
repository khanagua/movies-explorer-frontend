import Form from '../Form/Form';
import './Register.css';


function Register() {
  return (
    <div className="register">
      <Form
        name="register"
        title="Добро пожаловать!"
        buttonText = "Зарегистрироваться"
        buttonClass = "form__button_register"
      >
        <label htmlFor="name" className="form__label">Имя</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form__input form__input_type_name"
          minLength="2"
          maxLength="50"
          required
        />
        <label htmlFor="email" className="form__label">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form__input form__input_type_email"
          required
        />
        <label htmlFor="password" className="form__label">пароль</label>
        <input
          type="password"
          name="password"
          id="password"
          className="form__input form__input_type_password"
          required
        />
      </Form>
      <p className="register__footer">Уже зарегистрированы? <a href="/signin" className="register__link">Войти</a></p>
    </div>
  );
}

export default Register;
