import React from 'react';

export default function InputWithLabel(props) {
  return (
    <div className="form-group">
      <label className="text-right ml-3 mb-2 mt-2" htmlFor={props.name}><b>{props.name}</b></label>
      <input
        type={props.type}
        className={props.className}
        name={props.name}
        id={props.name}
        style={{borderRadius : '50px'}}
        value={props.value}
        onChange={props.change}
        onBlur = {props.onBlur}
        min={props.type === 'number' ? 0 : null}
      />
      <div className="invalid-feedback">{props.errorMessage}</div>
    </div>
  );
}

InputWithLabel.defaulProps = {
  type: 'text',
};
