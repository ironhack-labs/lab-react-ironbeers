import React, { Component } from 'react';
import { addBeer } from './../services/beersApi';
import NavBar from './../components/NavBar';

import App from './../App.css';

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      tagline: '',
      first_brewed: '',
      attenuation_level: '',
      description: '',
      contributed_by: '',
    };

    this.addBeer = (event) => {
      console.log('added new beer');
      this.event.preventDefault();
      const addNewBeer = {
        name: this.state.name,
        tagline: this.state.tagline,
        first_brewed: this.state.first_brewed,
        attenuation_level: this.state.attenuation_level,
        description: this.state.description,
        contributed_by: this.state.contributed_by,
      };
      this.addBeer(addNewBeer)
        .then(() => this.props.history.push('/beers'))
        .catch((error) => console.log(error));
    };

    this.handleInputChange = (event) => {
      console.log(event);
      event.preventDefault();
      const value = event.target.value;
      const input = event.target.name;
      this.setState({
        [input]: value,
      });
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <form className="form" action="/beers" onSubmit={this.addBeer}>
          <input
            onChange={this.handleInputChange}
            name="name"
            id="name"
            value={this.state.name}
            type="text"
            placeholder="Write beer name"
          />
          <input
            onChange={this.handleInputChange}
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            type="text"
            placeholder="Tagline"
          />

          <input
            onChange={this.handleInputChange}
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            type="text"
            placeholder="First Brewed"
          />

          <input
            onChange={this.handleInputChange}
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            type="text"
            placeholder="AttenuationLevel"
          />
          <input
            onChange={this.handleInputChange}
            name="description"
            id="description"
            value={this.state.description}
            type="text"
            placeholder="Description"
          />

          <input
            onChange={this.handleInputChange}
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            type="text"
            placeholder="Contributor"
          />
          <button>Add Beer</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
