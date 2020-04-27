import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = { query: '' };

  handleInput = (e) => {
    const { value } = e.target;
    const { findBeers } = this.props;
    this.setState({ query: value },
      findBeers(value));
  }

  render() {
    return (
      <div className='search-bar'>
        <label htmlFor='query'>Search</label>
        <input type='text' id='query' onChange={this.handleInput} />
      </div>
    );
  }
}
