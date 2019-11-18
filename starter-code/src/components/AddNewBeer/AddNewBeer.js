import React, { Component } from "react";
import Axios from "axios";

export default class AddNewBeer extends Component {
  constructor() {
    super();
    this.state = {
      
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
        message: ""
      
    };
  }
  handleInput = e => {
    // console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitNewBeer = e => {
    e.preventDefault();

    const beer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by
    }
    
    console.log(beer)

    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", beer)
    .then(res => {
      console.log(res)
      this.setState({
        message: "Posted Successfully"
      })
    })
    .catch(err => {
      console.error(err)
      this.setState({
        message: "Error!"
      })
    })
  };

  render() {
    return (
      <div>
      <h1>{this.state.message}</h1>
        <form className="container" onSubmit={this.submitNewBeer}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            className="form-control"
            type="text"
            name="tagline"
            onChange={this.handleInput}
            value={this.state.tagline}
          />
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            type="text"
            name="description"
            height="100px"
            onChange={this.handleInput}
            value={this.state.description}
          ></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            className="form-control"
            type="text"
            name="first_brewed"
            onChange={this.handleInput}
            value={this.state.first_brewed}
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            className="form-control"
            type="text"
            name="brewers_tips"
            onChange={this.handleInput}
            value={this.state.brewers_tips}
          />
          <label htmlFor="attenuation_level">Attenuation</label>
          <input
            className="form-control"
            type="number"
            name="attenuation_level"
            onChange={this.handleInput}
            value={this.state.attenuation_level}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            className="form-control"
            type="text"
            name="contributed_by"
            onChange={this.handleInput}
            value={this.state.contributed_by}
          />
          <button className="button btn-lg">Submit</button>
        </form>
      </div>
    );
  }
}
