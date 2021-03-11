import axios from 'axios';
import React from 'react';

class Search extends React.Component {
  state = {
    searchedBeer: [],
  };

  search = (event) => {
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/search?q=${event.target.value}`
      )
      .then((response) => {
        this.setState({
          searchedBeer: response.data,
        })
      });
  };


  render() {
    return (
      <div>
        <input
        className="form-control"
          onChange={this.search}
          name="name"
          placeholder="search"
          type="text"
        />
      </div>
    );
  }
}

export default Search;