import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="input-group input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Search
            </span>
          </div>
          <input
            onChange={this.props.onSearch}
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          ></input>
        </div>
      </div>
    );
  }
}

export default SearchBar;
