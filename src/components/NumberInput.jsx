import React from 'react';
import '../stylesheets/Input.css';

const NumberInput = ({ name, value, handleChange, placeholder }) => (
  <div className="NumberInput">
    <label htmlFor={name} className="NumberInput__label">{name}</label>
    <input
      className="NumberInput__input"
      type="number"
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    ></input>
  </div>
);

export default NumberInput;
