import React, { Component } from "react";
import Header from "../components/Header";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    beer: {}
  };

  handleSubmit = evt => {
    evt.preventDefault();
    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", this.state.beer)
      .then(beer => this.setState({ beer: beer.data }))
      .catch(err => console.log(err));
  };

  handleChange = evt => {
    const beer = { ...this.state.beer };
    beer[evt.target.name] = evt.target.value;
    this.setState({ beer });
  };

  render() {
    return (
      <div>
        <Header />
        <form
          className="beer-form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" />
          <label htmlFor="description">Description</label>
          <textarea
            style={{ height: 200, minHeight: 200, maxWidth: 300 }}
            type="text"
            name="description"
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" name="attenuation_level" />
          <label htmlFor="contributed_by">Contributed By</label>
          <input type="text" name="contributed_by" />
          <button type="submit" style={{ background: "dodgerblue" }}>
            Add New
          </button>
        </form>
      </div>
    );
  }
}
