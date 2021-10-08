import './PageNotFound.css';
import { useHistory } from 'react-router-dom'; 


function PageNotFound() {
  const history = useHistory(); 

  return (
    <div className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <button className="page-not-found__button" onClick={() => history.goBack()}>Назад</button>
    </div>
  );
}

export default PageNotFound;
