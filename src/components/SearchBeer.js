import React, { Component } from 'react';
import axios from 'axios';

class SearchBeer extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    this.props.searchProp(event.target.value);
    console.log(this.state);
  };

  submitForm = async (event) => {
    event.preventDefault();
    this.props.searchProp(this.state.name);
    // let res = await axios.get(
    //   `https://ih-beers-api2.herokuapp.com/beers/search?q=${this.state.name}`
    // );
    console.log(`I'm clicking`);
    // console.log(res);
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.submitForm}> */}
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="beerName"
        />
        {/* <input type="submit" value="Search" />
        </form> */}
      </div>
    );
  }
}

export default SearchBeer;
