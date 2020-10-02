import React from 'react';

export default function InputWithLabel(props) {
  return (
    <div className="form-group">
      <label className="text-right ml-3 mb-2 mt-2" htmlFor={props.name}><b>{props.name}</b></label>
      <input
        type={props.type}
        className="form-control p-4"
        name={props.name}
        id={props.name}
        style={{borderRadius : '50px'}}
        value={props.value}
        onChange={props.change}
        min={props.type === 'number' ? 0 : null}
      />
      {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
    </div>
  );
}

InputWithLabel.defaulProps = {
  type: 'text',
};
