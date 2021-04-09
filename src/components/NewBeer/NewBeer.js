import React, { Component } from 'react';
import '../NewBeer/NewBeer.css';
import Header from '../Header/Header';
import Axios from 'axios'


class NewBeer extends Component {

  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: "",
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ [e.target.name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { ...this.state })
      .then(res => {
        console.log('The new beer has been added')
      })

      .catch((e) => console.log(e))
  }

  render() {
    return (

      <div className="NewBeer" >
        <Header />

        <h1>New Beers</h1>

        <form className="" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label"><strong>Name</strong></label>
            <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="tagline" className="form-label"><strong>Tagline</strong></label>
            <input type="text" name="tagline" className="form-control" value={this.state.tagline} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label"><strong>Description</strong></label>
            <textarea type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="firstBrewed" className="form-label"><strong>First Brewed</strong></label>
            <input type="text" name="first_brewed" className="form-control" value={this.state.first_brewed} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="brewersTips" className="form-label"><strong>Brewers Tips</strong></label>
            <input type="text" name="brewers_tips" className="form-control" value={this.state.brewers_tips} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="attenuationLevel" className="form-label"><strong>Attenuation Level</strong></label>
            <input type="number" name="attenuation_level" className="form-control" value={this.state.attenuation_level} onChange={this.handleChange} />
          </div>

          <div className="mb-3">
            <label htmlFor="ContributedBy" className="form-label"><strong>Contributed By</strong></label>
            <input type="text" name="contributed_by" className="form-control" value={this.state.contributed_by} onChange={this.handleChange} />
          </div>

          <input type="submit" value="submit" className="submit_newbeer"/>

        </form>
      </div>


    )
  }
}

export default NewBeer