import React, { Component } from 'react'
import Header from './Header';
import axios from 'axios'

export default class NewBeerContainer extends Component {

  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }

  addNewBeer = (e) => {
    e.preventDefault()
    axios.post('https://ih-beer-api.herokuapp.com/beers/new', this.state)
      .then(response => console.log(response))
      .catch(err => console.log(err))

    this.setState({
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="form-container">
          <form className="new-beer" onSubmit={this.addNewBeer}>

            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
            </div>

            <div>
              <label htmlFor="tagline">Tagline</label>
              <input type="text" name="tagline" onChange={this.handleChange} value={this.state.tagline} />
            </div>

            <div>
              <label htmlFor="description">Description</label>
              <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />
            </div>

            <div>
              <label htmlFor="first_brewed">First brewed</label>
              <input type="text" name="first_brewed" onChange={this.handleChange} value={this.state.first_brewed} />
            </div>

            <div>
              <label htmlFor="brewers_tips">Brewers tips</label>
              <input type="text" name="brewers_tips" onChange={this.handleChange} value={this.state.brewers_tips} />
            </div>

            <div>
              <label htmlFor="attenuation_level">Attenuation level</label>
              <input type="number" name="attenuation_level" onChange={this.handleChange} value={this.state.attenuation_level} />
            </div>

            <div>
              <label htmlFor="contributed_by">Contributed by</label>
              <input type="text" name="contributed_by" onChange={this.handleChange} value={this.state.contributed_by} />
            </div>

            <button type="submit">Submit</button>

          </form>
        </div>
      </div>
    )
  }
}
