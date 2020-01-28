import React, { Component } from 'react';
import { create } from '../services/BeerService'
import { Redirect } from 'react-router-dom';


class NewBeer extends Component {

  state = {
    data: {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: ''
    },
    redirect: false 
  }

  handleChange = (e) => {
    const { name, value } = e.target

    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    create(this.state.data)
      .then(response => {
        this.setState({ redirect: true })
      })
  }


  render() {
    const { data, redirect } = this.state

    if (redirect) {
      return (
        <Redirect to="/beers"/>
      )
    }

    return (
      <div className="NewBeer">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" onChange={this.handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control" name="tagline" id="tagline" onChange={this.handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" rows="3" name="description" id="description" onChange={this.handleChange}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" className="form-control" name="first_brewed" id="first_brewed" onChange={this.handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" className="form-control" name="brewers_tips" id="brewers_tips" onChange={this.handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level </label>
            <input type="number" className="form-control" name="attenuation_level" id="attenuation_level" onChange={this.handleChange}></input>
          </div>

          <div className="form-group">
            <label htmlFor="contributed_by">Contributed by</label>
            <input type="text" className="form-control" name="contributed_by" id="contributed_by" onChange={this.handleChange}></input>
          </div>

          <button type="submit" className="btn btn-primary">Create</button>

        </form>
      </div>
    )
  }
}

export default NewBeer;
