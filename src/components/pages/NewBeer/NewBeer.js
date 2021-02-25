import React from 'react';
import {Component} from 'react'
import BeersService from './../../../service/beers.service'

class NewBeer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }
    this.beersService = new BeersService()
  }

  handleInputChange(e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    this.beersService
      .newBeer(this.state)
      .then((response) => console.log(response))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
      <div>
        <label>
        Name
          <input type='text' name='name' value={this.state.name} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        Tagline
          <input type='text' name='tagline' value={this.state.tagline} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        Description
          <input type='text' name='description' value={this.state.description} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        First Brewed
          <input type='text' name='first_brewed' value={this.state.first_brewed} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        Brewers_Tips
          <input type='text' name='brewers_tips' value={this.state.brewers_tips} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        Attenuation level
          <input type='text' name='attenuation_level' value={this.state.attenuation_level} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <div>
        <label>
        Contributed by
          <input type='text' name='contributed_by' value={this.state.contributed_by} onChange={e => this.handleInputChange(e)}></input>
        </label>
        </div>
        <button type='submit'>Create beer</button>
      </form>
    )
  }

}

export default NewBeer;