import React, { Component } from "react";

class Searchbar extends Component {
  handleChange = (event) => {
    this.props.callbackFn(event.target.value);
  };

  render() {
    return (
      <div className="m-3">
        <input
          name="search"
          value={this.props.value}
          onChange={this.handleChange}
          placeholder="Search for a beer"
          className="form-control mr-sm-2" 
          type="search"
        />
      </div>
        
    );
  }
}

export default Searchbar;