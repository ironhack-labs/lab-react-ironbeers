import React from 'react';
import { Component } from 'react';
import { Row } from 'react-bootstrap';
class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleInputChange(e) {
    const { name } = e.target;
    const inputValue = e.target.value;
    this.setState(
      {
        [name]: inputValue,
      },
      () => {
        this.props.searchHandler(this.state.search);
      }
    );
  }

  render() {
    return (
      <Row>
        <input
          name="search"
          type="text"
          placeholder="Search for a beer"
          value={this.state.search}
          onChange={(e) => this.handleInputChange(e)}
        ></input>
      </Row>
    );
  }
}
export default SearchBar;
