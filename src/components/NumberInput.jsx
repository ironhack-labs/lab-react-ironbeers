import React from 'react';
import '../stylesheets/Input.css';

const NumberInput = ({ name, value, handleChange, handleBlur, placeholder, error }) => (
  <div className="NumberInput">
    <label htmlFor={name} className="NumberInput__label">
      {name}
    </label>
    <div className="input-inner__wrapper">
      <input
        className={`NumberInput__input ${error ? 'input_error' : ''}`}
        type="number"
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

export default NumberInput;
