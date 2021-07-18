import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div>
        <input
          onChange={onSearch}
          type="search"
          name="q"
          aria-label="Search through site content"
        ></input>
      </div>
    );
  }
}

export default Search;
