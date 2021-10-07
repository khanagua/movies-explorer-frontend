import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__subtitle">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__info">
        <span className="footer__copyright">&#169; 2021</span>
        <ul className="footer__list">
          <li><a href="https://practicum.yandex.ru" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a></li>
          <li><a href="https://github.com/yandex-praktikum" className="footer__link" target="_blank" rel="noreferrer">Github</a></li>
          <li><a href="https://www.facebook.com/yandex.practicum/" className="footer__link" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
