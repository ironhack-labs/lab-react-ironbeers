import React from 'react';

const NumericInput = ({ name, value, onBlur, onChange, error, touch }) => (
  <div className="form-group">
    <label htmlFor={name}>{name}</label>

    <input
      id={name}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      type="number"
      className={`form-control ${touch && error ? 'is-invalid' : ''}`}
      placeholder={`Enter ${name}`}
    />

    <div className="invalid-feedback">error</div>
  </div>
);

export default NumericInput;
