import React, { Component } from "react";
import axios from "axios";

class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    descrition: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by:"",
  };

  handleChange = (event) => {
    const key = event.target.name;
    this.setState({ [key]: event.target.value });
  };

handleSubmit = (event) => {
event.preventDefault();

  axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
name: this.state.name,
tagline: this.state.tagline,
descrition: this.state.descrition,
first_brewed: this.state.first_brewed,
brewers_tips: this.state.brewers_tips,
attenuation_level: this.state.attenuation_level,
contributed_by: this.state.contributed_by,
  })
  .then((response) => {
    this.props.history.push("/beers")
  })
  .catch((err) => {
    console.log(err);
  })
}
  

  render() {
    return (
      <form method="" onSubmit={this.handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" 
        onChange={this.handleChange} 
        value={this.state.name} 
        name="name" 
        type="text"/>
      </div>
      <div>
        <label htmlFor="tagline">Tagline</label>
        <input id="tagline" 
        onChange={this.handleChange} 
        value={this.state.tagline} 
        name="tagline" 
        type="text"/>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input id="description" 
        onChange={this.handleChange} 
        value={this.state.description} 
        name="description" 
        type="text"/>
      </div>
      <div>
        <label htmlFor="first_brewed">First brewed</label>
        <input id="first_brewed" 
        onChange={this.handleChange} 
        value={this.state.first_brewed}
        name="first_brewed" 
        type="text"/>
      </div>
      <div>
        <label htmlFor="brewers_tips">Brewers tips</label>
        <input id="brewers_tips" 
        onChange={this.handleChange} 
        value={this.state.brewers_tips} 
        name="brewers_tips" 
        type="text"/>
      </div>
      <div>
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input id="attenuation_level" 
        onChange={this.handleChange} 
        value={this.state.attenuation_level} 
        name="attenuation_level" 
        type="number"/>
      </div>
      <div>
        <label htmlFor="contributed_by">Contributed by</label>
        <input id="contributed_by" 
        onChange={this.handleChange} 
        value={this.state.contributed_by} 
        name="contributed_by" 
        type="text"/>
      </div>
      <button>Submit</button>
      </form>
    )
  }
}

export default NewBeer

