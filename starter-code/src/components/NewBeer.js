import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state;

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    };
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", newBeer)
      .then(response => {
        console.log("Returned data:", response);
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(`Axios request failed: ${error}`);
      });
  };

  render() {
    return (
      <div>
        <form action="" className="beer-form" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="tagline">Tagline: </label>
          <input
            type="text"
            name="tagline"
            id="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          />

          <label htmlFor="description">Description: </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter the description here"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>

          <label htmlFor="first_brewed">First brewed: </label>
          <input
            type="text"
            name="first_brewed"
            id="first_brewed"
            value={this.state.first_brewed}
            onChange={this.handleChange}
          />

          <label htmlFor="brewers_tips">Brewers tips: </label>
          <input
            type="text"
            name="brewers_tips"
            id="brewers_tips"
            value={this.state.brewers_tips}
            onChange={this.handleChange}
          />

          <label htmlFor="attenuation_level">Attenuation level: </label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
            value={this.state.attenuation_level}
            onChange={this.handleChange}
          />

          <label htmlFor="contributed_by">Contributed by: </label>
          <input
            type="text"
            name="contributed_by"
            id="contributed_by"
            value={this.state.contributed_by}
            onChange={this.handleChange}
          />

          <button>ADD NEW</button>
        </form>
      </div>
    );
  }
}
