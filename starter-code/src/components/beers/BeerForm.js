import React, { Component } from 'react'
import axios from 'axios'

export default class BeerForm extends Component {
  state = {
    beer: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    },

    response: undefined
  }

  addNewBeer = async e => {
    e.preventDefault()
    const { beer } = this.state
    const response = await axios.post(
      'https://ih-beer-api.herokuapp.com/beers/new',
      beer
    )
    // Vaciamos el formulario
    this.setState({
      beer: {
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: ''
      },

      response: response.data.message
    })
  }

  handleInput = e => {
    this.setState({
      beer: {
        ...this.state.beer,

        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    const { beer, response } = this.state
    return (
      <div>
        <h1>Add a new beer</h1>

        {response && <p>{response}</p>}
        <form onSubmit={this.addNewBeer}>
          <div>
            <input
              required
              onChange={this.handleInput}
              value={beer.name}
              type="text"
              name="name"
              placeholder="Name"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.tagline}
              onChange={this.handleInput}
              type="text"
              name="tagline"
              placeholder="Tagline"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.description}
              onChange={this.handleInput}
              type="text"
              name="description"
              placeholder="Description"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.first_brewed}
              onChange={this.handleInput}
              type="text"
              name="first_brewed"
              placeholder="First brewed"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.brewers_tips}
              onChange={this.handleInput}
              type="text"
              name="brewers_tips"
              placeholder="Brewers tips"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.attenuation_level}
              onChange={this.handleInput}
              type="number"
              name="attenuation_level"
              placeholder="Attenuation level"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <input
              required
              value={beer.contributed_by}
              onChange={this.handleInput}
              type="text"
              name="contributed_by"
              placeholder="Contributed by"
              style={{ border: '1px solid #111' }}
            />
          </div>
          <div>
            <button type="submit" style={{ border: '1px solid #111' }}>
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}
