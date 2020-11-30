import React, { Component } from 'react';
import axios from 'axios';

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    attenuation_level: 0,
    first_brewed: '',
    description: '',
    contributed_by: '',
    brewers_tips: '',
  };

  inputChangeHandler = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        attenuation_level: this.state.attenuation_level,
        first_brewed: this.state.first_brewed,
        description: this.state.description,
        contributed_by: this.state.contributed_by,
        brewers_tips: this.state.brewers_tips,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((event) => console.log(event));
  };

  render() {
    return (
      <div>
           <h1>NEW BEER</h1>
        <form onSubmit={this.handleFormSubmission}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChangeHandler}
          />

          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.inputChangeHandler}
          />

          <label>First Brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.inputChangeHandler}
          />

          <label>Attenuation Level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.inputChangeHandler}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.inputChangeHandler}
          />

          <label>Contributed by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.inputChangeHandler}
          />

          <label>Brewers Tips:</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.inputChangeHandler}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
