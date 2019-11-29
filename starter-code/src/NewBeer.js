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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })



    this.setState({
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChange(event)}
            name="name"
            id="name"
          />
          <label htmlFor="">Tagline</label>
          <input
            type="text"
            value={this.state.tagline}
            onChange={event => this.handleChange(event)}
            name="tagline"
            id="tagline"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={this.state.description}
            onChange={event => this.handleChange(event)}
            name="description"
            id="description"
          />
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            type="text"
            value={this.state.first_brewed}
            onChange={event => this.handleChange(event)}
            name="first_brewed"
            id="first_brewed"
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            value={this.state.brewers_tips}
            onChange={event => this.handleChange(event)}
            name="brewers_tips"
            id="brewers_tips"
          />
          <label htmlFor="attenuation">Attenuation Level</label>
          <input
            type="number"
            value={this.state.attenuation}
            onChange={event => this.handleChange(event)}
            name="attenuation"
            id="attenuation"
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            value={this.state.contributed_by}
            onChange={event => this.handleChange(event)}
            name="contributed_by"
            id="contributed_by"
          />
          <input type="submit" value="ADD NEW" />
        </form>
      </div>
    );
  }
}

export default NewBeer;
