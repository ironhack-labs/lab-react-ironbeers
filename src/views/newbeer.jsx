import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import axios from "axios";

export default class newbeer extends Component {
state ={
name : "",
tagline : "",
description : "",
first_brewed : "",
brewers_tips : "",
attenuation_level : "",
contributed_by : "",
}

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  axios
    .post("https://ih-beers-api2.herokuapp.com/beers/new", {
      name: this.state.name,
      tagline: this.state.tagline,
      description : this.state.tagline,
      first_brewed : this.state.first_brewed,
      attenuation_level : this.state.attenuation_level,
      brewers_tips : this.state.brewers_tips,
      contributed_by : this.state.contributed_by,
    })
    .then((apiResponse) => {
      this.props.history.push("/beers");
     
    });
};

  render() {
    return (
      <div >
      <h1>New beer</h1>
      <NavLink exact to="/">Maison logo</NavLink>
     <form onSubmit={this.handleSubmit}>
     <label htmlFor="name">Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.name}
          id="name"
          name="name"
          type="text"
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          onChange={this.handleChange}
          value={this.state.tagline}
          id="tagline"
          name="tagline"
          type="text"
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={this.handleChange}
          value={this.state.description}
          id="description"
          name="description"
          type="text"
        />
        <label htmlFor="brewers_tips">brewers_tips</label>
        <input
          onChange={this.handleChange}
          value={this.state.brewers_tips}
          id="brewers_tips"
          name="brewers_tips"
          type="text"
        />
        <label htmlFor="attenuation_level">Attenuation_level</label>
        <input
          onChange={this.handleChange}
          value={this.state.attenuation_level}
          id="attenuation_level"
          name="attenuation_level"
          type="number"
        />
        <label htmlFor="contributed_by">Contributed_by</label>
        <input
          onChange={this.handleChange}
          value={this.state.contributed_by}
          id="contributed_by"
          name="contributed_by"
          type="text"
        />
        <button>Submit</button>

     </form>

    </div>
    )
  }
}


