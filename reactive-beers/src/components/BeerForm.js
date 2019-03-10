import React, { Component } from "react";
import Header from "./Header";
import { Redirect } from "react-router-dom"
import { newBeer } from "../services/BeersService";


class BeerForm extends Component {

  state = {
    beer: {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: Number,
      contributed_by: ""
    },
    isSubmitOk: false,
    isRedirect: false,
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      beer: {
        ...this.state.beer,
        [name]: value
      }
    })
  }

  handleRedirect = () => {
    setTimeout(() => { 
      this.setState({ isRedirect: true });
    }, 2000)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    newBeer(this.state.beer)
      .then(response => {
        this.setState({isSubmitOk: true})
      })
      .catch(err => this.setState({ error: true }))
    this.setState({
      email: "",
      error: true,
      touch: false
    })
  }

  render = () => {
    if (this.state.isRedirect) { 
      return (<Redirect to="/"/>) 
    }
    if (this.state.isSubmitOk) { 
      this.handleRedirect();
      return (
        <section className="hero is-primary is-bold is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                NEW BEER ADDED!
              </h1>
              <h2 className="subtitle">
                by roterom
              </h2>
            </div>
          </div>
        </section>
      ) 
    }
    return (
    <div className="NewBeer">
      <Header/>
      <form className="form" onSubmit={ this.handleSubmit }>
        <div className="field">
          <label className="label is-marginless">Name</label>
          <div className="control">
            <input className="input is-rounded" name="name" onChange={ this.handleChange } value ={ this.state.name } type="text" placeholder=""/>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">Tagline</label>
          <div className="control">
            <input className="input is-rounded" name="tagline" onChange={ this.handleChange } value ={ this.state.tagline } type="text" placeholder=""/>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">Description</label>
          <div className="control">
            <textarea className="textarea is-rounded" name="description" onChange={ this.handleChange } placeholder="">{ this.state.description }</textarea>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">First Brewed</label>
          <div className="control">
            <input className="input is-rounded" name="first_brewed" onChange={ this.handleChange } value ={ this.state.first_brewed } type="text" placeholder=""/>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">Brewers Tips</label>
          <div className="control">
            <input className="input is-rounded" name="brewers_tips" onChange={ this.handleChange } value ={ this.state.brewers_tips } type="text" placeholder=""/>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">Attenuation Level</label>
          <div className="control">
            <input className="input is-rounded" name="attenuation_level" onChange={ this.handleChange } value ={ this.state.attenuation_level } type="number" placeholder=""/>
          </div>
        </div>

        <div className="field">
          <label className="label is-marginless">Contributed By</label>
          <div className="control">
            <input className="input is-rounded" name="contributed_by" onChange={ this.handleChange } value ={ this.state.contributed_by } type="text" placeholder=""/>
          </div>
        </div>

        <div className="control">
          <button className="button is-link is-rounded is-fullwidth has-margin-top-30 has-margin-bottom-40" type="submit">ADD NEW</button>
        </div>
      </form>
    </div>
    )  
  }
  
}

export default BeerForm;
