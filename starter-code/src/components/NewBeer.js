import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tip: "",
    attenuation_level: 0,
    contributed_by: ""
  };

onHandleChange=(event)=>{
const {name,value}=event.target
this.setState({
[name]:value
})
}

handleSubmit=(event)=>{
    event.preventDefault()
axios.post('https://ih-beer-api.herokuapp.com/beers/new',{
    name: this.state.name,
    tagline: this.state.tagline,
    description: this.state.description,
    first_brewed: this.state.first_brewed,
    brewers_tip: this.state.brewers_tip,
    attenuation_level: this.state.attenuation_level,
    contributed_by: this.state.contributed_by
}).then(response=>{
console.log(response)
})
}

  render() {
    return (
      <div>
        <Header />
        <form className="form-component" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input value={this.state.name} onChange={this.onHandleChange} type="text" name="name" id="name" />
          <label htmlFor="tagline">Tagline</label>
          <input value={this.state.tagline} onChange={this.onHandleChange} type="text" name="tagline" id="tagline" />
          <label htmlFor="description">Description</label>
          <textarea
          value={this.state.description}
          onChange={this.onHandleChange}
            name="description"
            id="description"
            cols="30"
            rows="10"
            placeholder="Enter the description here"
          ></textarea>
          {/* <input value={this.state.description} onChange={this.onHandleChange} type="text" name="description" id="description" /> */}
          <label htmlFor="first_brewed">First Brewed</label>
          <input value={this.state.first_brewed} onChange={this.onHandleChange} type="text" name="first_brewed" id="first_brewed" />
          <label htmlFor="brewers_tip">Brewers Tip</label>
          <input value={this.state.brewers_tip} onChange={this.onHandleChange} type="text" name="brewers_tip" id="brewers_tip" />
          <label htmlFor="attenuation_level">Attenuation level</label>
          <input value={this.state.attenuation_level} onChange={this.onHandleChange}
            type="number"
            name="attenuation_level"
            id="attenuation_level"
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input value={this.state.contributed_by} onChange={this.onHandleChange} type="text" name="contributed_by" id="contributed_by" />
          <button type="submit">Add New</button>
        </form>
      </div>
    );
  }
}
