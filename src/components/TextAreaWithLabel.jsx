import React from 'react';

export default function InputWithLabel(props) {
  return (
    <div className="form-group">
      <label className="text-right ml-3 mb-2 mt-2" htmlFor={props.name}><b>{props.name}</b></label>
      <textarea
        className={props.className}
        name={props.name}
        id={props.name}
        style={{borderRadius : '50px'}}
        value={props.value}
        onChange={props.change}
        rows='10'
        onBlur = {props.onBlur}
      />
      <div className="invalid-feedback">{props.errorMessage}</div>
    </div>
  );
}

InputWithLabel.defaulProps = {
  type: 'text',
};