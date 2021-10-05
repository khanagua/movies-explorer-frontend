import { Link } from 'react-router-dom';
import './AccountButton.css';
import iconAccount from '../../images/icon_account.png';

function AccountButton() {
  return (
    <Link to="#" className="account-button">
      <span className="account-button__text">Аккаунт</span>
      <img src={iconAccount} alt="Переход в аккаунт" className="account-button__image" />
  </Link>
  );
}

export default AccountButton;
