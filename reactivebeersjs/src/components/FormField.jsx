import React, { Component } from "react";
class FormField extends Component {
  render() {
    return (
      <div className="formField">
        <label className="label">{this.props.label}</label>
        <div >
          <input
          name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.inputchange}
          />
        </div>
      </div>
    );
  }
}

export default FormField;
