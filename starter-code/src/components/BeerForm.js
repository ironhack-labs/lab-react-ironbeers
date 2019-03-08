import React, { Component } from 'react'
import Input from './Input';
import TextArea from './TextArea';
import { newBeer } from '../services/beersService';

class BeerForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "",
      tagline: "",
      first_brewed: "",
      description: "",
      image_url: `https://images.punkapi.com/v2/${Math.floor(Math.random() * 234)}.png`,
      brewers_tips: "",
      contributed_by: "",
      attenuation_level: 0
    }
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
  
    this.setState({
          [name]: value
        }); 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    newBeer({...this.state})
      .then(response => console.log("Hace el submit",response))
      .catch(err => this.setState({ error: true }))
    }
  
  render = () => {
    return (
     <form className="box" onSubmit={this.handleSubmit}>
      <Input  type="text" title="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
      <br/>
      <Input type="text" title="Tagline" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
      <br/>
      <Input type="text" title="First Brewed" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
      <br/>
      <TextArea title="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
      <br/>
      <TextArea title="Brewers Tips" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
      <br/>
      <Input type="number" title="Attenuation Level" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
      <br/>
      <Input type="text" title="Contributed by" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
      <br/>
      <br/>
      <div>
        <button type="submit" className="button is-primary is-outlined is-fullwidth">Submit</button>
      </div>
     </form>
    )
  }
  
}

export default BeerForm 


