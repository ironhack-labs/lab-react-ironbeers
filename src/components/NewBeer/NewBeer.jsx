import React, { Component } from 'react';
import axios from 'axios';
import './NewBeer.css';

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: '',
};

export default class NewBeer extends Component {
  state = { ...initialState };

  onChange = (e) => {
    const { name, type, value } = e.target;

    this.setState({
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      !this.state.name ||
      !this.state.tagline ||
      !this.state.description ||
      !this.state.first_brewed ||
      !this.state.brewers_tips ||
      !this.state.attenuation_level ||
      !this.state.contributed_by
    ) {
      return;
    }

    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, { ...this.state })
      .then((response) => {
        console.log('New beer created!');
      })
      .catch((err) => console.log(err));
    this.setState({ ...initialState });
  };

  render() {
    return (
      <div className="NewBeer">
        <form className="NewBeer-form">
          <div className="form-input">
            <label>
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>Tagline</strong>
            </label>
            <input
              type="text"
              placeholder="Tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>Description</strong>
            </label>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>First Brewed</strong>
            </label>
            <input
              type="text"
              placeholder="First Brewed"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>Brewers Tips</strong>
            </label>
            <input
              type="text"
              placeholder="Brewers tips"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>Attenuation Level</strong>
            </label>
            <input
              type="text"
              placeholder="Attenuation level"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.onChange}
            />
          </div>
          <div className="form-input">
            <label>
              <strong>Contributed By</strong>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.onChange}
            />
          </div>
          <div className="form-button">
            <button>Add New Beer</button>
          </div>
        </form>
      </div>
    );
  }
}
