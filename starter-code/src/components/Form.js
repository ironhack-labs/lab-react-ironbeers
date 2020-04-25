import React, { Component } from 'react'

export default class Form extends Component {

  constructor(){
    super()
    this.state = {}
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = () => {
    const newBeer = {...this.state}
    if(this.isValid(newBeer)) this.props.getNewBeer(newBeer)
    else alert("Fill required fields")
  }

  isValid = () => {
    const requiredFields = ['name', 'tagline', 'description', 'first_brewed']
    for(const req of requiredFields) if(!Object.keys(this.state).includes(req)) return false
    return true
  }

  render() {
    return (
      <div className="new-beer-form">
        <label htmlFor="name">Name *</label>
        <input onChange={this.handleInput} type="text" id="name" name="name"/>
        <label htmlFor="tagline">Tag Line *</label>
        <input onChange={this.handleInput} type="text" id="tagline" name="tagline"/>
        <label htmlFor="description">Description *</label>
        <input onChange={this.handleInput} type="text" id="description" name="description"/>
        <label htmlFor="firstBrewed">First Brewed *</label>
        <input onChange={this.handleInput} type="text" id="firstBrewed" name="first_brewed"/>
        <label htmlFor="brewersTips">Brewers tips</label>
        <input onChange={this.handleInput} type="text" id="brewersTips" name="brewers_tips"/>
        <label htmlFor="attenuationLevel">Attenuation level</label>
        <input onChange={this.handleInput} type="number" id="attenuationLevel" name="attenuation_level"/>
        <label htmlFor="contributedBy">Contributed By</label>
        <input onChange={this.handleInput} type="text" id="contributedBy" name="contributed_by"/>
        <button className="submit-btn" onClick={this.handleClick}>Submit</button>
      </div>
      )
  }
}
