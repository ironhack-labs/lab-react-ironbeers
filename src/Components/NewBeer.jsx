// import React from 'react';
import axios from 'axios';
import React, { Component } from 'react';

import Header from '../Components/Header';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (evt) => {
    const inputKey = evt.target.name;
    this.setState({ [inputKey]: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Im cliiicked')

  axios
  .post('https://ih-beers-api2.herokuapp.com/beers/new', {
    name: this.state.name,
    tagline: this.state.tagline,
    description: this.state.description,
    first_brewed: this.state.first_brewed ,
    brewers_tips: this.state.brewers_tips,
    attenuation_level: this.state.attenuation_level,
    contributed_by: this.state.contributed_by,
  })
  .then((res) => {
    // console.log("the hist", this.props.history)
      const check = this.props.history.push('/new');
  })
  .catch((err) =>  console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Add a beer</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            onChange={this.handleChange}
            valur={this.state.name}
            type="text"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            name="tagline"
            onChange={this.handleChange}
            value={this.state.tagline}
            type="text"
          />
          <label htmlFor="description">Description</label>
          <input
            name="description"
            onChange={this.handleChange}
            value={this.state.description}
            type="text"
          />
          <label htmlFor="first_brewed">First brewed</label>
          <input
            name="first_brewed"
            onChange={this.handleChange}
            value={this.state.first_brewed}
            type="text"
          />
          <label htmlFor="brewers_tips">Brewers tips</label>
          <input
            name="brewers_tips"
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            type="text"
          />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input
            name="attenuation_level"
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            type="number"
          />
          <label htmlFor="contibuted_by">Contributed by</label>
          <input
            name="contibuted_by"
            onChange={this.handleChange}
            value={this.state.contibuted_by}
            type="text"
          />
          <button>Add a new beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
