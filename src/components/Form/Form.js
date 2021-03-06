import React from 'react';
import './Form.css';

function Form(props) {
  return (
    <form className="form" name={props.name}>
      <h1 className="form__title">{props.title}</h1>
      <fieldset className="form__fieldset">
        {props.children}
        <button className={`form__button ${props.buttonClass}`} type="submit" aria-label={props.buttonText}>{props.buttonText}</button>
      </fieldset>
    </form>
  );
}

export default Form;
