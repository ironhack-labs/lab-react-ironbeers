import React from "react";

export default class InputForm extends React.Component {

  handleChange(e){
    this.props.onChange(e.target.value)
  }

  render() {
    let {label,placeholder} = this.props
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder={placeholder}
            onChange={e => this.handleChange(e)}
          />
        </div>
      </div>
    );
  }
}
