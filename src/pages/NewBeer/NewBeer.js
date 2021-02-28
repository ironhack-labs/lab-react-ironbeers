import React, { Component } from 'react'
import axios from 'axios'
import './NewBeer.css';

import NavBar from '../../components/NavBar/NavBar';

export default class NewBeer extends Component {
  state = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    
    axios.post(`https://ih-beers-api2.herokuapp.com/beers/new`, this.state)
      .then( (res) => {
        console.log(res.status)
        this.setState({
          name: "",
          tagline: "",
          description: "",
          first_brewed: "",
          brewers_tips: "",
          attenuation_level: "",
          contributed_by: ""
        })
      })
      .catch( (err) => console.log(err));
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState( { [name]: value } )
  }


  render() {
    return (
      <div>
        <NavBar />
        <h1>Add a new beer</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Beer name" 
            value={this.state.name}
            onChange={this.handleInput}
          />
          
          <label>Tagline</label>
          <input
            type="text" 
            name="tagline" 
            placeholder="Beer tagline" 
            value={this.state.tagline} 
            onChange={this.handleInput}
            />

          <label>Description</label>
          <textarea
            className="input-descr"
            type="text" 
            name="description" 
            placeholder="Beer description" 
            value={this.state.description} 
            onChange={this.handleInput}
          />
          <label>First Brewed</label>
          <input
            type="text" 
            name="first_brewed" 
            placeholder="Brewed since" 
            value={this.state.first_brewed} 
            onChange={this.handleInput}
          />
          <label>Brewer's tips</label>
          <input
            type="text" 
            name="brewers_tips" 
            placeholder="Brewer's Tips" 
            value={this.state.brewers_tips} 
            onChange={this.handleInput}
          />
          <label>Attenuation Level</label>
          <input
            type="number" 
            name="attenuation_level" 
            placeholder="Beer" 
            value={this.state.attenuation_level} 
            onChange={this.handleInput}
          />
          <label>Contributed by</label>
          <input
            type="text" 
            name="contributed_by" 
            placeholder="Contributed by" 
            value={this.state.contributed_by} 
            onChange={this.handleInput}
          />
          
          <button type="submit">Add new beer</button>
        </form>      
      </div>
    )
  }
}

