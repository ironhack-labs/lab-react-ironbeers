import React from 'react';
import '../stylesheets/Input.css';

const TextInput = ({ name, value, handleChange, handleBlur, placeholder, error }) => (
  <div className="TextInput">
    <label htmlFor={name} className="TextInput__label">
      {name}
    </label>
    <div className="input-inner__wrapper">
      <input
        className={`TextInput__input ${error ? 'input_error' : ''}`}
        type="text"
        value={value}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder={placeholder}
      ></input>
      {error && <small className="error-msg">Missing Field</small>}
    </div>
  </div>
);

export default TextInput;
