import React, { Component } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const initialState = {
  name: '',
  tagline: '',
  description: '',
  first_brewed: '',
  brewers_tips: '',
  attenuation_level: 0,
  contributed_by: ''
}

export default class NewBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmitForm = event => {
    event.preventDefault()

    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', this.state)
      .then(res => {
        console.log(res)
        this.setState({ ...initialState })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Navbar />
        <form onSubmit={this.handleSubmitForm}>
          <div className="field">
            <label className="label">Name: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tagline: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="tagline"
                value={this.state.tagline}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Description: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">First brewed: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="first_brewed"
                value={this.state.first_brewed}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Brewed tips: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="brewers_tips"
                value={this.state.brewers_tips}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Attenuation level: </label>
            <div className="control">
              <input
                className="input"
                type="number"
                name="attenuation_level"
                value={this.state.attenuation_level}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Contributed by: </label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="contributed_by"
                value={this.state.contributed_by}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <input className="button is-link" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
