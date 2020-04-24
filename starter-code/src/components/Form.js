import React, { Component } from 'react'

export default class Form extends Component {

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const newBeer = {...this.state}
    this.props.getNewBeer(newBeer)
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={this.handleInput} type="text" id="name" name="name"/>
        <label htmlFor="tagline">Tag Line</label>
        <input onChange={this.handleInput} type="text" id="tagline" name="tagline"/>
        <label htmlFor="description">Description</label>
        <input onChange={this.handleInput} type="text" id="description" name="description"/>
        <label htmlFor="firstBrewed">First Brewed</label>
        <input onChange={this.handleInput} type="text" id="firstBrewed" name="first_brewed"/>
        <label htmlFor="brewersTips">Brewers tips</label>
        <input onChange={this.handleInput} type="text" id="brewersTips" name="brewers_tips"/>
        <label htmlFor="attenuationLevel">Attenuation level</label>
        <input onChange={this.handleInput} type="number" id="attenuationLevel" name="attenuation_level"/>
        <label htmlFor="contributedBy">Contributed By</label>
        <input onChange={this.handleInput} type="text" id="contributedBy" name="contributed_by"/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
      )
  }
}
