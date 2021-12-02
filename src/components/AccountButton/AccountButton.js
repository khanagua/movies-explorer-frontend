import './AccountButton.css';
import iconAccount from '../../images/icon_account.png';
import { Link } from 'react-router-dom';

function AccountButton() {
  return (
    <Link to="/profile" className="account-button">
      <span className="account-button__text">Аккаунт</span>
      <img src={iconAccount} alt="Переход в аккаунт" className="account-button__image" />
  </Link>
  );
}

export default AccountButton;
