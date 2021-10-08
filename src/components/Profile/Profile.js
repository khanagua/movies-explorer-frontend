import { Link } from 'react-router-dom';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виктория!</h1>
      <form className="profile__form" name="profile">
        <div className="profile__wrap">
          <label htmlFor="name" className="profile__label">Имя</label>
          <input
            type="text"
            name="name"
            id="name"
            className="profile__input profile__input_type_name"
            minLength="2"
            maxLength="50"
            placeholder="Виктория"
            required
          />
        </div>
        <div className="profile__wrap">
          <label htmlFor="email" className="profile__label">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            className="profile__input profile__input_type_email"
            placeholder="vika@ya.ru"
            required
          />
        </div>
        <button className="profile__button" type="submit" aria-label="Редактировать">Редактировать</button>
      </form>
      <Link to="/" className="profile__link">Выйти из аккаунта</Link>
    </div>
  );
}

export default Profile;
