import React, { Component } from "react";

class Searchbar extends Component {
  handleChange = (event) => {
    this.props.callbackFn(event.target.value);
  };

  render() {
    return (
      <input
        name="search"
        value={this.props.value}
        onChange={this.handleChange}
        placeholder="Search for a beer"
      />
    );
  }
}

export default Searchbar;