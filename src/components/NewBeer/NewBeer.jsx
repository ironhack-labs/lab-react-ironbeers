import React from 'react';
import './NewBeer.css'
import NavBar from '../NavBar/NavBar'
import { Component } from "react"
import axios from 'axios'
class NewBeer extends Component {

  state = {
    name:'Beer name',
    tagline:'Tagline',
    description:'Description',
    first_brewed: 'First Brewed',
    brewers_tips:'Brewer Tips',
    attenuation_level: 0,
    contributed_by: 'Contributed by'

  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({ [e.target.name]: value })
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {...this.state})
    .then(response => {
      console.log('data has been sended')
    })
    .catch((e) => console.log(e))
    

  }

  render(){
    return (
        <div className='NewBeer'>
          <NavBar /> 
          
          <form className='d-flex flex-column my-5 align-items-center mx-5' onSubmit={this.handleSubmit}>
            <label className='d-flex flex-column align-items-start'>
              <b>Name:</b>
              <input 
                type="text" 
                name="name" 
                className='input__style' 
                value={this.state.name}  
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
            <b>Tagline:</b>
              <input 
                type="text" 
                name="tagline" 
                className='input__style' 
                value={this.state.tagline} 
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
            <b>Description:</b>
              <textarea
                type="text" 
                name="description" 
                className='input__style textarea__style' 
                value={this.state.description} 
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>First Brewed:</b>
              <input 
                type="text" 
                name="first_brewed" 
                className='input__style' 
                value={this.state.first_brewed} 
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Brewers Tips:</b>
              <input 
                type="text" 
                name="brewers_tips" 
                className='input__style' 
                value={this.state.brewers_tips} 
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Attenuation Level:</b>
              <input 
                type="number" 
                name="attenuation_level" 
                className='input__style' 
                value={this.state.attenuation_level} 
                onChange={this.handleChange}
              />
            </label>
            <label className='d-flex flex-column align-items-start'>
              <b>Contributed by:</b>
              <input 
                type="text"  
                name="contributed_by" 
                className='input__style' 
                value={this.state.contributed_by} 
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" className=' submit__style'/>
        </form>
        </div>
    )
  }
}

export default NewBeer;