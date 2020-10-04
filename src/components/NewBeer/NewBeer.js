import React, { Component } from 'react';
import NavBar from '../Navbar/NavBar';
import axios from 'axios';
import './NewBeer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: null,
    contributed_by: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    });
    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: null,
      contributed_by: '',
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <form onSubmit={this.handleSubmit} className="form">
          <div className="form-box">
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="tagline">Tagline </label>
            <input
              type="text"
              name="tagline"
              id="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="description">Description </label>
            <input
              className="description"
              type="textarea"
              name="description"
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="first_brewed">First Brewed </label>
            <input
              type="text"
              name="first_brewed"
              id="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="brewers_tips">Brewers Tips </label>
            <input
              type="text"
              name="brewers_tips"
              id="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="attenuation_level">Attenuation Level </label>
            <input
              type="number"
              name="attenuation_level"
              id="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-box">
            <label htmlFor="contributed_by">Contributed By </label>
            <input
              type="text"
              name="contributed_by"
              id="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
            />
          </div>

          <div className="form">
            <button className="submit" type="submit">
              ADD NEW
            </button>
          </div>
        </form>
      </div>
    );
  }
}
