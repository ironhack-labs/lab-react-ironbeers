import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import { postNewBeer } from '../services/api-client';
import './NewBeer.css';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    postNewBeer(
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
          <NavBar/>
        </div>
        <form className="form-group" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
            />
            <label htmlFor="tagline">Tagline</label>
            <input
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleInputChange}
            />
            <label htmlFor="description">Description</label>
            <textarea
                type="text"
                name="description"
                rows="6"
                value={this.state.description}
                onChange={this.handleInputChange}
            />
            <label htmlFor="firstBrewed">First brewed</label>
            <input
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleInputChange}
            />
            <label htmlFor="Brewer's tips">Brewer's tips</label>
            <input
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleInputChange}
            />
            <label htmlFor="attenuationLevel">Attenuation level</label>
            <input
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleInputChange}
            />
            <label htmlFor="contributedBy">Contributed by</label>
            <input
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleInputChange}
            />
            <button type="submit">Add new Beer</button>
        </form>
      </div>
    );
  }
}