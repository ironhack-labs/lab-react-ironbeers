import React, { Component } from 'react';
import Axios from 'axios'

class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''

  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    // lift the state!
    // push character into parent state
    console.log(this.state)
    const newBeer = this.state

    Axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      body: newBeer
    }).then((response) => {
      console.log(response);
    }).catch(err=>console.log(err));
    
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Tagline:</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />
          <label>first_brewed:</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />
          <label>brewer_tips:</label>
          <input
            type="text"
            name="brewer_tips"
            value={this.state.brewer_tips}
            onChange={this.handleChange}
          />
          <label>attenuation_level:</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />
          <label>contributed_by:</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
