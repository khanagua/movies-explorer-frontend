import Form from '../Form/Form';
import './Login.css';


function Login() {
  return (
    <div className="login">
      <Form
        name="login"
        title="Рады видеть!"
        buttonText = "Войти"
        buttonClass = "form__button_login"
      >
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
      <p className="login__footer">Ещё не зарегистрированы? <a href="/signup" className="login__link">Регистрация</a></p>
    </div>
  );
}

export default Login;
