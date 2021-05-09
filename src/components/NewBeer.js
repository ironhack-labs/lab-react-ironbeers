import React, { Component } from 'react';
import './NewBeer.css';
import axios from 'axios';

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
    uploadSuccessMsg: '',
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
      .then((response) => {
        this.setState({
          uploadSuccessMsg: response.data.message,
        });
      });
  };

  render() {
    const uploadSuccess = this.state.uploadSuccessMsg;
    if (uploadSuccess) return <h1>{uploadSuccess}</h1>;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <label>Tagline</label>
          <input
            name="tagline"
            type="text"
            value={this.state.tagline}
            onChange={this.handleChange}
          ></input>
          <label>Description</label>
          <input
            name="description"
            id="description"
            type="text"
            value={this.state.description}
            onChange={this.handleChange}
          ></input>
          <label>First Brewed</label>
          <input
            name="first_brewed"
            type="text"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          ></input>
          <label>Brewers Tips</label>
          <input
            name="brewers_tips"
            type="text"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          ></input>
          <label>Attenuation Level</label>
          <input
            name="attenuation_level"
            type="number"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          ></input>
          <label>Contributed By</label>
          <input
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          ></input>
          <input
            // type="button"
            className="button"
            type="submit"
            value="ADD NEW"
          />
        </form>
      </div>
    );
  }
}
