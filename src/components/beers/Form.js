import React, { Component } from 'react'
import axios from 'axios'
import {  Redirect} from 'react-router-dom'
import { addBeer } from '../../services/BeerService'

export default class Form extends Component {

  state = {
    beer : {
      name : '',
      tagline : '',
      description : '',
      first_brewed : '',
      brewers_tips : '',
      attenuation_level : '',
      contributed_by : ''
    },
    isSubmitSuccessful: false,
  }

  handleChange = (e) => {
    console.log(this.state.beer)
    this.setState({
      beer : {
        ...this.state.beer,
        [e.target.name] : e.target.value
      }
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    addBeer( this.state.beer )
    .then( () => {
        this.setState({  
          isSubmitSuccessful: true,
         });
    })
    .catch( error =>  
      
    console.log("Add Beer ERROR", error) )
  }

  
  render = ()=> {
     if (this.state.isSubmitSuccessful){
      return <Redirect to ="/home" />
    }
    return( 
        <form onSubmit={this.handleFormSubmit}>
          <strong><h1 className='title has-margin-top-20'>Add New Beer</h1></strong>
          <hr />
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" name='name' placeholder="Beer's name" value={this.state.beer.name} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Tagline</label>
            <div className="control ">
              <input className="input is-success" type="text" placeholder="Beer's tagline" name='tagline' value={this.state.beer.tagline} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Description</label>
            <div className="control ">
            <textarea className="textarea" placeholder="Description" name='description' value={this.state.beer.description} onChange={this.handleChange}></textarea>
            </div>
          </div>

          <div className="field">
            <label className="label">First Brewed</label>
            <div className="control ">
              <input className="input is-success" type="text" placeholder="First brewed" name='first_brewed' value={this.state.beer.first_brewed} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Brewers tips</label>
            <div className="control ">
              <input className="input is-success" type="text" placeholder="Brewers Tips" name='brewers_tips' value={this.state.beer.brewers_tips} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Attenuation level</label>
            <div className="control ">
              <input className="input is-success" type="number" placeholder="Attenutation level" name='attenuation_level' value={this.state.beer.attenuation_level} onChange={this.handleChange}/>
            </div>
          </div>

          <div className="field">
            <label className="label">Contributed by</label>
            <div className="control ">
              <input className="input is-success" type="text" placeholder="Beer's tagline" name='contributed_by' value={this.state.beer.contributed_by} onChange={this.handleChange}/>
            </div>
          </div>

          <button type="submit" value="submit" className="button is-primary is-fullwidth has-margin-top-35 is-medium">
            Submit
          </button>
        </form>
    )
  }
}
