import React from 'react';

const Input = (props) => {
  const { name, type, value, onChange, onBlur, error, touch } = props;
  return (
    <div className="form-group">
      {console.log(touch && error)}
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        className={`form-control ${touch && error ? 'is-invalid' : ''}`}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="invalid-feedback">Please provide a valid zip.</div>
    </div>
  );
};

export default Input;
