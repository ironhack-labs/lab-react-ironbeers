import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerService'
import Home from '../scenes/Home'

class CreateBeer extends React.Component {
  state = {
    redirect: false,
    name: "",
    tagline: "",
    description: "",
    first_brewed:"",
    brewers_tips:"",
    attenuation_level:0,
    contributed_by:"",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const beer = {
    name: this.state.name,
    tagline: this.state.tagline,
    description: this.state.description,
    first_brewed: this.state.first_brewed,
    brewers_tips: this.state.brewers_tips,
    attenuation_level: parseInt(this.state.attenuation_level),
    contributed_by: this.state.contributed_by,
    }
    console.log(beer)
    BeerService.newBeer(beer)
      .then(
        res => this.setState({
          redirect: true
        }),
        error => console.error(error)
      )
  }

  render () {
    if(this.state.redirect) {return <Home />}
    else {return ( 
      <div>
        <Header />
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group mt-3">
            <label className="strong">Name</label>
            <input className="form-control br" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Tagline</label>
            <input className="form-control br" type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Description</label>
            <textarea className="form-control br" type="text" name="description" value={this.state.description} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group mt-3">
            <label className="strong">First Brewed</label>
            <input className="form-control br" type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Brewers Tips</label>
            <input className="form-control br" type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Attenuation Level</label>
            <input className="form-control br" type="number" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Contributed By</label>
            <input className="form-control br" type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}></input>
          </div>
          <button className="button-form" type="submit">ADD NEW</button>
        </form>
      </div>
    )}}
}

export default CreateBeer