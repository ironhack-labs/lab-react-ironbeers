import axios from 'axios';
import React, { Component } from 'react';
import HomeButton from './HomeButton';

class NewBeer extends Component {
  state = {
    name: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this);
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state);
  };

  render() {
    return (
      <div>
        <HomeButton />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="beer name"
            type="text"
            name="name"
          />
        </form>
      </div>
    );
  }
}

export default NewBeer;
