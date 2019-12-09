import React, { Component } from "react";
import addBeer from "./../../Services/add-beer";
import axios from "axios";

class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      newBeer: {
        name: null,
        tagline: null,
        description: null,
        first_brewed: null,
        brewers_tips: null,
        attenuation_level: null,
        contributed_by: null
      }
    };
    this.newBeer = this.newBeer.bind(this);
  }

  newBeer(event) {
    event.preventDefault();
    // console.log(event.target.name.value);
    const newBeer = {
      name: event.target.name.value,
      tagline: event.target.tagline.value,
      description: event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewers_tips: event.target.brewers_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    };
    this.setState({
      newBeer
    });
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state.newBeer)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state.newBeer);
    return (
      <div>
        <form onSubmit={this.newBeer}>
          <label htmlFor="name">Beer Name</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline" />
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="description" />
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" id="first_brewed" />
          <label htmlFor="brewers_tips">Brewer Tips</label>
          <input type="text" name="brewers_tips" id="brewers_tips" />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" id="contributed_by" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
