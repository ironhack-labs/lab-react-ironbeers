import React, { Component } from "react";
import Header from "../components/Header";
import axios from "axios";
// name // tagline // description // first_brewed // brewers_tips // attenuation_level // contributed_by

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  updateState = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  submitForm = e => {
    e.preventDefault();
    axios
      .post("http://ih-beers-api2.herokuapp.com/beers/new", {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: this.state.attenuation_level,
        contributed_by: this.state.contributed_by
      })
      .then(apiRes => {
        console.log("NEW BEER CREATED! ", apiRes);
      })
      .catch(apiErr => {
        console.log("ERROR WHILE CREATING: ", apiErr);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <form
          className="new-beer"
          method="post"
          onChange={this.updateState}
          onSubmit={this.submitForm}
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" />

          <label htmlFor="description">Description</label>
          <textarea type="text" name="description" />

          <label htmlFor="first_brewed">First brewed</label>
          <input type="text" name="first_brewed" />

          <label htmlFor="brewers_tips">Brewers tips</label>
          <input type="text" name="brewers_tips" />

          <label htmlFor="attenuation_level">Attenuation level</label>
          <input type="number" name="attenuation_level" />

          <label htmlFor="contributed_by">Contributed by</label>
          <input type="text" name="contributed_by" />

          <button type="submit">ADD A BEER</button>
        </form>
      </div>
    );
  }
}
