import React, { Component } from 'react';
import Header from '../components/Header';

class Newbeer extends Component {
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

    this.props.handleAddBeer({
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    });
  };

  render() {
    return (
      <div>
        <Header />

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
            className="textarea"
            type="textarea"
            name="description"
          />

          <label className="label" htmlFor="first_brewed">
            First Brewed
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
            Brewers Tips
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.brewers_tips}
            id="brewerstips"
            autoComplete="off"
            className="input"
            type="text"
            name="brewers_tips"
          />

          <label className="label" htmlFor="attenuation_level">
            Attenuation Level
          </label>
          <input
            onChange={this.handleChange}
            value={this.state.attenuation_level}
            id="attenuationlevel"
            autoComplete="off"
            className="input"
            type="number"
            name="attenuation_level"
          />

          <label className="label" htmlFor="contributed_by">
            Contributed by
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

          <button className="button">Add new</button>
        </form>
      </div>
    );
  }
}
export default Newbeer;
