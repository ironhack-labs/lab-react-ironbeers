import React from 'react';

const TextArea = ({ name, value, onBlur, onChange, error, touch }) => (
  <div className="form-group">
    <label htmlFor={name}>{name}</label>

    <textarea
      id={name}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className={`form-control ${touch && error ? 'is-invalid' : ''}`}
    ></textarea>

    <div className="invalid-feedback">error</div>
  </div>
);

export default TextArea;
