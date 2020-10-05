import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewBeer.css';
import { createNewBeer } from '../../services/BeerServices';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: undefined,
    contributed_by: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createBeer = (e) => {
    e.preventDefault();
    createNewBeer(
      this.state.name,
      this.state.tagline,
      this.state.description,
      this.state.first_brewed,
      this.state.brewers_tips,
      this.state.attenuation_level,
      this.state.contributed_by
    ).then((response) => {
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: null,
        contributed_by: '',
      });
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <Link to={'/'}>
            <img src="/images/home.png" alt="home.png" />
          </Link>
        </div>
        <form className="new-beer-form" onSubmit={this.createBeer}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleInputChange}
          />
          <label>Description</label>
          <textarea
            type="textarea"
            name="description"
            rows="6"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <label>First brewed</label>
          <input
            type="text"
            name="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleInputChange}
          />
          <label>Brewer's tips</label>
          <input
            type="text"
            name="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleInputChange}
          />
          <label>Attenuation level</label>
          <input
            type="number"
            name="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleInputChange}
          />
          <label>Contributed by</label>
          <input
            type="text"
            name="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleInputChange}
          />
          <button type="submit">Create beer</button>
        </form>
      </div>
    );
  }
}
