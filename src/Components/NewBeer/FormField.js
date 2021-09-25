import React from 'react';

function FormField(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props._id} className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
      />
      {props.hint ? <div className="form-text">{props.hint}</div> : null}
    </div>
  );
}

export default FormField;
