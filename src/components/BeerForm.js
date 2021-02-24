import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { createBeerService } from './../beer.service';

class BeerForm extends Component {
  state = {
    name: '',
    description: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await createBeerService(this.state);
    this.props.history.push('/beers');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default withRouter(BeerForm);
