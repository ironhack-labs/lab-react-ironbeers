import React, { Component } from "react";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  };

  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addBeer = event => {
    event.preventDefault();
    console.log("Submit clicked");
    console.log(event);
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    });
  };

  render() {
    // console.log("New Beer called");
    return (
      <div className="container">
        <form action="/new" method="POST" onSubmit={this.addBeer}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Beer name"
              className="form-control"
            />

            <label htmlFor="tagline">Tagline</label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleChange}
              placeholder="Tagline"
              className="form-control"
            />

            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
              className="form-control"
            />

            <label htmlFor="first_brewed">First brewed</label>
            <input
              type="text"
              id="first_brewed"
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleChange}
              placeholder="First brewed"
              className="form-control"
            />

            <label htmlFor="brewers_tips">Brewers tips</label>
            <input
              type="text"
              id="brewers_tips"
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleChange}
              placeholder="Brewers tips"
              className="form-control"
            />

            <label htmlFor="attenuation_level">Attenuation level</label>
            <input
              type="number"
              id="attenuation_level"
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleChange}
              placeholder="Attenuation level"
              className="form-control"
            />

            <label htmlFor="contributed_by">Contributed by</label>
            <input
              type="text"
              id="contributed_by"
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleChange}
              placeholder="Contributed by"
              className="form-control"
            />

            <button type="submit" className="btn btn-primary">
              ADD NEW
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewBeer;
