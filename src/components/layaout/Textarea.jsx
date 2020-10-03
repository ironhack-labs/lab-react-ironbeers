import React from 'react';

const Textarea = (props) => {
  const { name, value, onChange, onBlur, error, touch } = props;
  return (
    <div className="form-group">
      <label htmlFor={name}>{name}</label>
      <textarea
        rows="3"
        name={name}
        className={`form-control ${touch && error ? 'is-invalid' : ''}`}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <div className="invalid-feedback">Please provide a valid {name}.</div>
    </div>
  );
};

export default Textarea;
