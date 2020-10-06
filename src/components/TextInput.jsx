import React from 'react';
import '../stylesheets/Input.css';

const TextInput = ({ name, value, handleChange, placeholder }) => (
  <div className="TextInput">
    <label htmlFor={name} className="TextInput__label">{name}</label>
    <input
      className="TextInput__input"
      type="text"
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    ></input>
  </div>
);

export default TextInput;
