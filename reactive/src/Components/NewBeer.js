import React from "react";
import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";

class NewBeer extends Component {
  constructor (props) {
    super (props);
    this.state = { name:"", tagline:"", description:"", first_brewed:"", brewers_tips:"", attenuation_level:0, contributed_by:"" }
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const tagline = this.state.tagline;
    const description = this.state.description;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;
    axios.post("https://ironbeer-api.herokuapp.com/beers/new",{ name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by })
    .then( () => {
      this.props.getData();
      this.setState({ name:"", tagline:"", description:"", first_brewed:"", brewers_tips:"", attenuation_level:0, contributed_by:"" });
    })
    .catch( error => {
      console.log(error)
    })
  }
  handleChangeEvent = (event) => {
    const { name, value } = event.target;
    this.setState ({[name]: value});
  }
  render () {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleFormSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={ e => this.handleChangeEvent(e)}/>
          <label>tagline</label>
          <input type="text" name="tagline" value={this.state.tagline} onChange={ e => this.handleChangeEvent(e)}/>
          <label>description</label>
          <textarea type="text" name="description" value={this.state.description} onChange={ e => this.handleChangeEvent(e)}/>
          <label>first_brewed</label>
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={ e => this.handleChangeEvent(e)}/>
          <label>brewers_tips</label>
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={ e => this.handleChangeEvent(e)}/>
          <label>attenuation_level</label>
          <input type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={ e => this.handleChangeEvent(e)}/>
          <label>contributed_by</label>
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={ e => this.handleChangeEvent(e)}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default NewBeer;