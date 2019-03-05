import React from 'react';

export default (props) => (
  <div className="field">
    <label className="label">{props.title}</label>
    <div className="control has-icons-left has-icons-right">
      <input
        name={props.name}
        className="input"
        type={props.type || 'text'}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
        onBlur={props.onBlur}
      />

      <span className="icon is-small is-left">
        <i className={props.icon}></i>
      </span>

      {props.touch && props.error && (
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle"></i>
        </span>
      )}

      {props.touch && !props.error && (
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      )}

      {props.touch && props.error && (
        <p className="help is-danger">{props.title} is invalid</p>
      )}
    </div>
  </div>
);