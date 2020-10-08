import React, { Component } from 'react';
import Header from '../components/Header';
import BeersApi from '../API/BeersApi';

export default class newBeer extends Component {
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
    const value = event.target.value;
    const key = event.target.name;

    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

    BeersApi.createOne(this.state)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Header />
        <h1>New beer</h1>

        <form className="Form" onSubmit={this.handleSubmit}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            id="name"
            autoComplete="off"
            className="input"
            type="text"
            name="name"
          />

          <label className="label" htmlFor="tagline">
            Tagline
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.tagline}
            id="tagline"
            autoComplete="off"
            className="input"
            type="text"
            name="tagline"
          />

          <label className="label" htmlFor="description">
            Description
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.description}
            id="description"
            autoComplete="off"
            className="input"
            type="text"
            name="description"
          />

          <label className="label" htmlFor="first_brewed">
            First brewed
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.first_brewed}
            id="first_brewed"
            autoComplete="off"
            className="input"
            type="text"
            name="first_brewed"
          />

          <label className="label" htmlFor="brewers_tips">
            Brewers_tips
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            id="brewers_tips"
            autoComplete="off"
            className="input"
            type="text"
            name="brewers_tips"
          />

          <label className="label" htmlFor="attenuation_level">
            Attenuation_level
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            id="attenuation_level"
            autoComplete="off"
            className="input"
            type="number"
            name="attenuation_level"
          />

          <label className="label" htmlFor="contributed_by">
            Contributed_by
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.contributed_by}
            id="contributed_by"
            autoComplete="off"
            className="input"
            type="text"
            name="contributed_by"
          />
          <button className="button">Submit</button>
        </form>
      </div>
    );
  }
}
