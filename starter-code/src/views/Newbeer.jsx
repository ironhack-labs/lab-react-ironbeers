import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";

export default class Newbeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: ""
  };



  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  
  handleSubmit = e => {
    e.preventDefault();

    const beer = {
        name: this.state.name,
        tagline: this.state.tagline,
        description: this.state.description,
        first_brewed: this.state.first_brewed,
        brewers_tips: this.state.brewers_tips,
        attenuation_level: Number(this.state.attenuation_level),
        contributed_by: this.state.contributed_by
    }

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", beer) 

}
  

  render() {
    return (
      <div>
        <Header />
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} id="form">
          {/* {JSON.stringify(this.state, null, 2)} */}
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" />
          <label htmlFor="first-brewed">First Brewed</label>
          <input type="text" name="first-brewed" />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input type="text" name="brewers_tips" />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" name="attenuation_level" />
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" />
          <button type="submit">Add new</button>
        </form>
      </div>
    );
  }
}
