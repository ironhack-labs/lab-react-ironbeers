import React, { Component } from 'react'
import axios from 'axios'

class NewBeer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then(response =>{
        console.log(response)
        this.setState({
          name: '',
          tagline: '',
          description: '',
          first_brewed: '',
          brewers_tips: '',
          attenuation_level: 0,
          contributed_by: ''
        })
      })
      .catch(error => console.log(error))
    
    
  }
  

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={this.handleChange}
        />
        <br/>
        
        <label htmlFor="tagline">Tagline</label>
        <input 
          type="text" 
          name="tagline" 
          value={tagline} 
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          name="description" 
          value={description} 
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor="first_brewed">First Brewed</label>
        <input 
          type="text" 
          name="first_brewed" 
          value={first_brewed} 
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor="brewers_tips">Brewers Tips</label>
        <input 
          type="text" 
          name="brewers_tips" 
          value={brewers_tips} 
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor="attenuation_level">Attenuation Level</label>
        <input 
          type="number" 
          name="attenuation_level" 
          value={attenuation_level} 
          onChange={this.handleChange}
        />
        <br/>
        <label htmlFor="contributed_by">Contributed By</label>
        <input 
          type="text" 
          name="contributed_by" 
          value={contributed_by} 
          onChange={this.handleChange}
        />
        <br/>
        <button>ADD NEW</button>
      </form>
    )
  }
}

export default NewBeer
