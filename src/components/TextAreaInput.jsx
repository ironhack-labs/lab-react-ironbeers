import React from 'react';
import '../stylesheets/Input.css';

const TextAreaInput = ({ name, value, handleChange, placeholder }) => (
  <div className="TextInput">
    <label htmlFor={name} className="TextInput__label">{name}</label>
    <textarea
      className="TextInput__input"
      value={value}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    ></textarea>
  </div>
);

export default TextAreaInput;
