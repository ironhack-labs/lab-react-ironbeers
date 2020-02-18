import React, { Component } from "react";
import axios from "axios";

class AddBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newBeer: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
      }
    };
  }

  changeHandler = event => {
    let { name, value } = event.target;
    let cacheBeer = this.state.newBeer;
    cacheBeer[name] = value;
    this.setState({ newBeer: cacheBeer });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state.newBeer)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" onChange={this.changeHandler} />

        <label htmlFor="tagline">Tagline</label>

        <input name="tagline" type="text" onChange={this.changeHandler} />

        <label htmlFor="description">Description</label>

        <input name="description" type="text" onChange={this.changeHandler} />

        <label htmlFor="first_brewed">First Brewed</label>

        <input name="first_brewed" type="text" onChange={this.changeHandler} />

        <label htmlFor="brewers_tips">Brewers Tips</label>

        <input name="brewers_tips" type="text" onChange={this.changeHandler} />

        <label htmlFor="attenuation_level">Attenuation Level</label>

        <input name="attenuation_level" type="number" onChange={this.changeHandler} />

        <label htmlFor="contributed_by">Contributed By</label>

        <input name="contributed_by" type="text" onChange={this.changeHandler} />
        <br />

        <button type="submit">ADD NEW</button>
      </form>
    );
  }
}

export default AddBeer;
