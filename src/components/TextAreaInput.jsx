import React from 'react';
import '../stylesheets/Input.css';

const TextAreaInput = ({ name, value, handleChange, placeholder, error }) => (
  <div className="TextInput">
    <label htmlFor={name} className="TextInput__label">
      {name}
    </label>
    <div className="input-inner__wrapper">
      <textarea
        className={`TextInput__input ${error ? 'input_error' : ''}`}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
      ></textarea>
      {error && <small className="error-msg">Missing Field</small>}
    </div>
  </div>
);

export default TextAreaInput;
