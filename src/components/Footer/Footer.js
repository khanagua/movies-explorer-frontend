import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <span className="footer__copyright">&#169; 2021</span>
        <ul className="footer__list">
          <li><Link to="#" className="footer__link">Яндекс.Практикум</Link></li>
          <li><Link to="#" className="footer__link">Github</Link></li>
          <li><Link to="#" className="footer__link">Facebook</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
