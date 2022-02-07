import React from 'react';
import './Popup.css';

function Popup(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <p className="popup__message">{props.isMessage}</p>
        <button onClick={props.onClose} className="popup__btn" type="button"></button>
      </div>
    </div>
  );
}

export default Popup;

