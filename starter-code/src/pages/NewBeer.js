import React, { Component } from 'react'
import BEER_SERVICE from '../services/BeerList'
import NavBar from '../components/NavBar'

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  }

  submit = async (e) => {
    e.preventDefault()
    await BEER_SERVICE.newBeer(this.state)
    this.props.history.push('/')
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <NavBar />
        </div>
        <form onSubmit={this.submit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="tagLine">TagLine: </label>
            <input
              name="tagline"
              value={this.state.tagline}
              onChange={this.handleInput}
              type="text"
              id="tagLine"
            />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <textarea
              style={{
                height: '100px',
              }}
              name="description"
              value={this.state.description}
              onChange={this.handleInput}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="firstBrewed">First Brewed: </label>
            <input
              name="first_brewed"
              value={this.state.first_brewed}
              onChange={this.handleInput}
              type="text"
              aria-describedby="firstBrewedInput"
            />
          </div>
          <div>
            <label htmlFor="brewerTips">Brewer Tips: </label>
            <input
              name="brewers_tips"
              value={this.state.brewers_tips}
              onChange={this.handleInput}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="attLevel">Attenuation Level: </label>
            <input
              name="attenuation_level"
              value={this.state.attenuation_level}
              onChange={this.handleInput}
              type="number"
            />
          </div>
          <div>
            <label htmlFor="contributedBy">Contributed By: </label>
            <input
              name="contributed_by"
              value={this.state.contributed_by}
              onChange={this.handleInput}
              type="text"
            />
          </div>
          <button type="submit">ADD NEW</button>
        </form>
      </div>
    )
  }
}
