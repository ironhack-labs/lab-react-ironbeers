/*


- Finish styling submit button
- Finish axios cycle, redirect to newly created beer page
- Message William
- Pay Ironhack


*/

import React, { Component } from "react";
import axios from "axios";

export default class NewBeer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const newBeer = {
      name: e.target.name.value,
      tagline: e.target.tagline.value,
      description: e.target.description.value,
      first_brewed: e.target.first_brewed.value,
      brewers_tips: e.target.brewers_tips.value,
      attenuation_level: e.target.attenuation_level.value,
      contributed_by: e.target.contributed_by.value,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      .then((apiRes) => {
        console.log(apiRes);
        this.props.history.push("/newest");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <form class="new-beer" onSubmit={this.handleSubmit}>
        <h2>Add a New Beer</h2>
        <label htmlFor="name">
          <p className="inline-label">Name</p>
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="tagline">
          <p className="inline-label">Tagline</p>
          <input type="text" name="tagline" id="tagline" />
        </label>
        <label htmlFor="first_brewed">
          <p className="inline-label">First Brewed</p>
          <input type="text" name="first_brewed" id="first_brewed" />
        </label>
        <label htmlFor="attenutation_level">
          <p className="inline-label">Attenuation Level</p>
          <input
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          />
        </label>
        <label htmlFor="contributed_by">
          <p className="inline-label">Contributed By</p>
          <input type="text" name="contributed_by" id="contributed_by" />
        </label>
        <label class="text-area" htmlFor="description">
          <p className="over-label">Description</p>
          <textarea name="description" id="description"></textarea>
        </label>
        <label class="text-area" htmlFor="brewers_tips">
          <p className="over-label">Brewer's Tips</p>
          <textarea name="brewers_tips" id="brewers_tips"></textarea>
        </label>
        <button>Submit</button>
      </form>
    );
  }
}
