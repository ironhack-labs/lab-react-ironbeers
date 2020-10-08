import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  handleChange = (event) => {
    // console.dir(event.target.name);
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
      <form className="Form">
        <Header />
        <h2 className="title">Add a Beer</h2>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input
          value={this.state.name}
          id="name"
          autoComplete="off"
          className="input"
          type="text"
          name="name"
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="tagline">
          Tagline
        </label>
        <input
          id="tagline"
          autoComplete="off"
          className="input"
          type="text"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="description">
          Description
        </label>
        <input
          id="description"
          autoComplete="off"
          className="input"
          type="textarea"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="first_brewed">
          First Brewed
        </label>
        <input
          id="first_brewed"
          autoComplete="off"
          className="input"
          type="text"
          name="first_brewed"
          value={this.state.first_brewed}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="brewers_tips">
          Brewers Tips
        </label>
        <input
          id="brewers_tips"
          autoComplete="off"
          className="input"
          type="text"
          name="brewers_tips"
          value={this.state.brewers_tips}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="attenuation_level">
          Attenuation Level
        </label>
        <input
          id="attenuation_level"
          autoComplete="off"
          className="input"
          type="number"
          name="attenuation_level"
          value={this.state.dattenuation_level}
          onChange={this.handleChange}
        />

        <label className="label" htmlFor="contributed_by">
          Contributed By:
        </label>
        <input
          id="contributed_by"
          autoComplete="off"
          className="input"
          type="text"
          name="contributed_by"
          value={this.state.contributed_by}
          onChange={this.handleChange}
        />
          <button onClick={this.handleSubmit} className="button">Submit</button>
      </form>
    );
  }
}

export default NewBeer;