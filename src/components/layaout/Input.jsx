import React from 'react';

const Input = (props) => {
  const {
    name,
    type,
    value,
    onChange,
    onBlur,
    error,
    touch,
    label,
    placeholder,
    autocomplete,
  } = props;
  return (
    <div>
      {label && <label htmlFor={name}>{name}</label>}
      <input
        type={type}
        name={name}
        className={`form-control ${touch && error ? 'is-invalid' : ''}`}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autocomplete ? 'On' : 'Off'}
      />
      <div className="invalid-feedback">Please provide a valid {name}.</div>
    </div>
  );
};

export default Input;
