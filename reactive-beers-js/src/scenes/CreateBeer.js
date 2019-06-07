import React from 'react'
import Header from '../components/Header'
import BeerService from '../services/BeerService'
import Home from '../scenes/Home'

const validator = {
  name: value => value.length > 3,
  tagline: value => value.length > 5,
  description: value => value.length > 50,
  first_brewed:value => value.length > 3,
  brewers_tips:value => value.length > 5,
  attenuation_level: value => value > 1,
  contributed_by: value => value.length > 3,
}

class CreateBeer extends React.Component {
  state = {
    data: {
      redirect: false,
      name: "",
      tagline: "",
      description: "",
      first_brewed:"",
      brewers_tips:"",
      attenuation_level:0,
      contributed_by:"",
    },
    errors: {
      name: true,
      tagline: true,
      description: true,
      first_brewed: true,
      brewers_tips: true,
      attenuation_level: true,
      contributed_by: true,
    },
    touch: {}
  }

  handleChange = (e) => {
    const isValid = validator[e.target.name](e.target.value)
    this.setState({
      data:{
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: !isValid
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const beer = {
    name: this.state.data.name,
    tagline: this.state.data.tagline,
    description: this.state.data.description,
    first_brewed: this.state.data.first_brewed,
    brewers_tips: this.state.data.brewers_tips,
    attenuation_level: parseInt(this.state.data.attenuation_level),
    contributed_by: this.state.data.contributed_by,
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

  handleBlur = e => {
    this.setState({
      touch: {
        ...this.state.touch,
        [e.target.name]: true
      }
    })
  }

  render () {
    const inputClass = (txt) => {
      const { errors, touch } = this.state
      if (!touch[txt]) {return "form-control br"}
      if (touch[txt] && errors[txt]) {return "form-control br is-invalid"}
      else {return "form-control br is-valid"}
    }

    const disabled = Object.values(this.state.errors).some(el => el === true)
    console.log(disabled)
    const myState = this.state.data
    if(this.state.redirect) {return <Home />}
    else {return ( 
      <div>
        <Header />
        <form className="container" onSubmit={this.handleSubmit}>
          <div className="form-group mt-3">
            <label className="strong">Name</label>
            <input className={inputClass("name")} type="text" name="name" value={myState.name} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Tagline</label>
            <input className={inputClass("tagline")} type="text" name="tagline" value={myState.tagline} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Description</label>
            <textarea className={inputClass("description")} type="text" name="description" value={myState.description} onChange={this.handleChange} onBlur={this.handleBlur}></textarea>
          </div>
          <div className="form-group mt-3">
            <label className="strong">First Brewed</label>
            <input className={inputClass("first_brewed")} type="text" name="first_brewed" value={myState.first_brewed} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Brewers Tips</label>
            <input className={inputClass("brewers_tips")} type="text" name="brewers_tips" value={myState.brewers_tips} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Attenuation Level</label>
            <input className={inputClass("attenuation_level")} type="number" name="attenuation_level" value={myState.attenuation_level} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <div className="form-group mt-3">
            <label className="strong">Contributed By</label>
            <input className={inputClass("contributed_by")} type="text" name="contributed_by" value={myState.contributed_by} onChange={this.handleChange} onBlur={this.handleBlur}></input>
          </div>
          <button className="button-form" type="submit" disabled={disabled}>ADD NEW</button>
        </form>
      </div>
    )}}
}

export default CreateBeer