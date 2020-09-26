import React, { Component } from 'react';
import axios from 'axios';

export default class NewBeer extends Component {
  handleSubmit = (event) => {
    console.log('this is the event:', event);

    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <div>
        <form action="/beers/new" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="">Name:</label>
          <input type="text" name="name" id="name"></input>

          <label htmlFor="">Tagline</label>
          <input type="text" name="tagline" id="tagline"></input>

          <label htmlFor="">Description:</label>
          <input type="text" name="description" id="description"></input>

          <label htmlFor="">First Brewed:</label>
          <input type="text" name="first_brewed" id="first_brewed"></input>

          <label htmlFor="">Brewers tips:</label>
          <input type="text" name="brewers_tips" id="brewers_tips"></input>

          <label htmlFor="">Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          ></input>

          <label htmlFor="">Created by: </label>
          <input type="text" name="contributed_by" id="contributed_by"></input>

          <button type="submit">Add a new beer</button>
        </form>
      </div>
    );
  }
}
