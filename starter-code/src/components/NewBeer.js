import React, { Component } from 'react';
import Header from './misc/Header';
import { newBeer } from '../services/BeersService';

import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
  // state = {
  //   beer : {    
  //     name : '',
  //     tagline: '',
  //     description: '',
  //     first_brewed: '',
  //     brewer_tips: '',
  //     attenuation_level: 0,
  //     contributed_by: ''
  //   },
  //   error: false
  state = {
    name : '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: ''
  }

  error = false;
  done = false;

  handleChange = (event) => {
    // this.setState({ beer: {[event.target.name] : event.target.value }})
    this.setState({ [event.target.name] : event.target.value})
  }

  handleSubmit = (e) => {
    console.log(this.state)
    e.preventDefault();
    newBeer({...this.state})
    .then(response => {
      console.log(response);
      if (response === 'OK'){
        this.done = true;
      }

    },
    err => this.error = true)
  }

  render(){
    return(
       <div className="container">
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Beer Name" 
              value={this.state.name} onChange={this.handleChange} onBlur={this.handleBlur} name="name"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Tagline</label>
            <div className="control">
              <input className="input" type="text" placeholder="Tagline" 
              value={this.state.tagline} onChange={this.handleChange} onBlur={this.handleBlur} name="tagline"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input className="textarea" type="text" placeholder="Description" 
              value={this.state.description} onChange={this.handleChange} onBlur={this.handleBlur} name="description"/>
            </div>
          </div>
          <div className="field">
            <label className="label">First Brewed</label>
            <div className="control">
              <input className="input" type="text" placeholder="First Brewed" 
              value={this.state.first_brewed} onChange={this.handleChange} onBlur={this.handleBlur} name="first_brewed"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Brewer Tips</label>
            <div className="control">
              <input className="input" type="text" placeholder="Brewers Tips" 
              value={this.state.brewers_tips} onChange={this.handleChange} onBlur={this.handleBlur} name="brewers_tips"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Attenuation Level</label>
            <div className="control">
              <input className="input" type="number" placeholder="Attenuation Level" 
              value={this.state.attenuation_level} onChange={this.handleChange} onBlur={this.handleBlur} name="attenuation_level"/>
            </div>
          </div>
          <div className="field">
            <label className="label">Contributed By</label>
            <div className="control">
              <input className="input" type="text" placeholder="Contributed By" 
              value={this.state.contributed_by} onChange={this.handleChange} onBlur={this.handleBlur} name="contributed_by"/>
            </div>
          </div>
          <input className="button" type="submit" value="Submit"/>
        </form>  
      </div>  
    );
  }
}

export default NewBeer;