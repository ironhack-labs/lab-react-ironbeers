import React from "react";

export default class TextAreaForm extends React.Component {
  handleChange(e) {
    this.props.onChange(e.target.value);
  }
  render() {
    let {label,placeholder} = this.props
    return (
      <div className="field">
        <label className="label">{label}</label>
        <div className="control">
          <textarea className="textarea" placeholder={placeholder} onChange={(e)=>this.handleChange(e)}/>
        </div>
      </div>
    );
  }
}
