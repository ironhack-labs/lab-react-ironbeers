import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function FormField(props) {
  return (
    <div className="form-group">
    <label>{props.children}</label>
    <input
      type={props.type}
      className="form-control"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
  )
}

export default FormField;
