import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };

  handleChange = (event) => {
    const value = event.target.value;

    this.setState({
      search: value,
    });

    this.props.handleSearch({
      search: event.target.value,
    });
  };


  render() {
    return (
      <div>
        <form className="Form">
          <input
            id="search"
            autoComplete="off"
            className="search"
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
