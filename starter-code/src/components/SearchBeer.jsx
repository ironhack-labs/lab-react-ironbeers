import React from "react";

class SearchBeer extends React.Component {
  state = {
    searchValue: ""
  };

  handleOnChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
    this.props.handleSearch(event.target.value)
  };

  render() {
    return (
      <div>
        <input
          className="search-bar input is-primary"
          placeholder="Search for a beer..."
          type="text"
          name="text"
          onChange={event => this.handleOnChange(event)}
        />
      </div>
    );
  }
}

export default SearchBeer;
