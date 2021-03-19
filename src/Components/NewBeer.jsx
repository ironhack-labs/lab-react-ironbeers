import React, { Component } from 'react';
import Header from './Header';
import '../Styles/NewBeer.css';
import axios from 'axios';

export class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by,
      })
      .then((response) => {
          console.log(response);
        this.props.history.push('/beers');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="newBeer">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            id="name"
            type="text"
            name="name"
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleChange}
            id="tagline"
            type="text"
            name="tagline"
          />
          <label htmlFor="description">Description</label>
          <textarea
            onChange={this.handleChange}
            id="description"
            type="text"
            name="description"
          ></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            onChange={this.handleChange}
            id="first_brewed"
            type="text"
            name="first_brewed"
          />
          <label htmlFor="brewers_tips ">Brewer Tips</label>
          <input
            onChange={this.handleChange}
            id="brewers_tips "
            type="text"
            name="brewers_tips "
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            onChange={this.handleChange}
            id="attenuation_level"
            type="number"
            name="attenuation_level"
          />
          <label htmlFor="contributed_by">Contributed by:</label>
          <input
            onChange={this.handleChange}
            id="contributed_by"
            type="text"
            name="contributed_by"
          />
          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
