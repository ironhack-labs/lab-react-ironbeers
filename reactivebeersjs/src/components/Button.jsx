import React, { Component } from "react";
class Button extends Component {
  render() {
    return (
      <button onClick={this.props.submit} type="button">
        {this.props.info}
      </button>
    );
  }
}
export default Button;
