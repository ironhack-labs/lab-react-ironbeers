import React, { Component } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

export default class NewBeer extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();

    axios.post('https://ironbeer-api.herokuapp.com/beers/new', this.state)
    .then(response =>{
      console.log(response.data)
    })
    .catch(err => {console.log(err)})
  }
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <h1>Create New Beer</h1>
          <form onSubmit={(e)=>{this.handleSubmit(e)}}>
            Name:
            <input type="text" name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            Tagline:
            <input type="text" name="tagline" value={this.state.tagline} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            First Brewed:
            <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            Brewers tips:
            <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            Attenuation Level:
            <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            Contributed by:
            <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={(e)=>this.handleChange(e)}/>
            <br/>
            <button>Beer 🍺</button>
          </form>
        </div>
      </div>
    )
  }
}
