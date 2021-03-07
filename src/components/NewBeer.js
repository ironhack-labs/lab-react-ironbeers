import axios from 'axios';
import React, { Component } from 'react';

export class NewBeer extends Component {
  state = {
    name: '',
    description: '',
    contributed_by: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            placeholder="beer name"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            placeholder="description"
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="contributed_by"
            placeholder="contributed by"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
