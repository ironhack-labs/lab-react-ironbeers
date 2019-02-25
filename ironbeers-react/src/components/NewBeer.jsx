import React, { Component } from 'react'

import Header from './Header';
import axios from "axios"

export default class NewBeer extends Component {

  constructor() {
    super()
    this.state = {
      data: {
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: "",
        contributed_by: ""
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://ironbeer-api.herokuapp.com/beers/new", this.state.data)
      .then(response => {
        console.log(response)
      })
  }

  handleNameChange = (e) => {
    const newState = { ...this.state }
    newState.data.name = e.target.value
    this.setState(newState);
  }

  handleTaglineChange = (e) => {
    const newState = { ...this.state }
    newState.data.tagline = e.target.value
    this.setState(newState);
  }

  handleDescriptionChange = (e) => {
    const newState = { ...this.state }
    newState.data.description = e.target.value
    this.setState(newState);
  }

  handleFirstBrewedChange = (e) => {
    const newState = { ...this.state }
    newState.data.first_brewed = e.target.value
    this.setState(newState);
  }

  handleBrewersTipsChange = (e) => {
    const newState = { ...this.state }
    newState.data.brewers_tips = e.target.value
    this.setState(newState);
  }

  handleAttenuationLevelChange = (e) => {
    const newState = { ...this.state }
    newState.data.attenuation_level = e.target.value
    this.setState(newState);
  }

  handleContributedByChange = (e) => {
    const newState = { ...this.state }
    newState.data.contributed_by = e.target.value
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Add New Beer</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name"
            value={this.state.data.name} onChange={this.handleNameChange} />
          <br /><br />
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline"
            value={this.state.data.tagline} onChange={this.handleTaglineChange} />
          <br /><br />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10"
            value={this.state.data.description} onChange={this.handleDescriptionChange}></textarea>
          <br /><br />
          <label htmlFor="first_brewed">First Brewed</label>
          <input type="text" name="first_brewed" id="first_brewed"
            value={this.state.data.first_brewed} onChange={this.handleFirstBrewedChange} />
          <br /><br />
          <label htmlFor="brewers_tips">Brewer Tips</label>
          <input type="text" name="brewers_tips" id="brewers_tips"
            value={this.state.data.nabrewers_tipsme} onChange={this.handleBrewers_TipsChange} />
          <br /><br />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input type="number" min="1" name="attenuation_level" id="attenuation_level"
            value={this.state.data.attenuation_level} onChange={this.handleAttenuationLevelChange} />
          <br /><br />
          <label htmlFor="contributed_by">Brewer Tips</label>
          <input type="text" name="contributed_by" id="contributed_by"
            value={this.state.data.contributed_by} onChange={this.handleContributedByChange} />
          <br /><br />
          <input type="submit" value="ADD NEW" />
        </form>
      </div >
    )
  }
}




/* name
tagline
description
first_brewed
brewers_tips
attenuation_level (must be a number above 1)
contributed_by */
