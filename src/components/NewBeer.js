import React, { Component } from 'react';
import axios from 'axios';

export default class NewBeer extends Component {
  handleSubmit = (event) => {
    console.log('this is the event:', event);
    event.preventDefault();

    const form = event.target;
    const name = form.querySelector('input#name').value;
    const tagline = form.querySelector('input#tagline').value;
    const description = form.querySelector('input#description').value;
    const firstBrewed = form.querySelector('input#first_brewed').value;
    const brewersTips = form.querySelector('input#brewers_tips').value;
    const attenuationLevel = form.querySelector('input#attenuation_level')
      .value;
    const contributedBy = form.querySelector('input#contributed_by').value;

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', {
        name: name,
        tagline: tagline,
        description: description,
        first_brewed: firstBrewed,
        brewers_tips: brewersTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <form action="/beers/new" method="POST" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name"></input>

          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline"></input>

          <label htmlFor="description">Description:</label>
          <input type="text" name="description" id="description"></input>

          <label htmlFor="first_brewed">First Brewed:</label>
          <input type="text" name="first_brewed" id="first_brewed"></input>

          <label htmlFor="brewers_tips">Brewers tips:</label>
          <input type="text" name="brewers_tips" id="brewers_tips"></input>

          <label htmlFor="attenuation_level">Attenuation level:</label>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          ></input>

          <label htmlFor="contributed_by">Created by: </label>
          <input type="text" name="contributed_by" id="contributed_by"></input>

          <button>Add a new beer</button>
        </form>
      </div>
    );
  }
}
