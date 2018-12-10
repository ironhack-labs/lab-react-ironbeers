import React, { Component } from 'react';
import axios from 'axios'; 
import { Redirect } from 'react-router-dom';

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: 0,
      contributed_by: '',
      redirect:false,
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
    axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by})
    .then( () => {
      
      this.setState({...this.state,redirect:true})
    })
    .catch(err => {
      console.log("Something went wrong", err);
    });

  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    if (!this.state.redirect) {
      return (
        <div>
        <div>
          <form onSubmit={this.handleFormSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ e => this.handleChange(e)}/>
            <label>Tagline</label>
            <input type="text" name="tagline" placeholder="Tagline" value={this.state.tagline} onChange={ e => this.handleChange(e)}/>
            <label>Description</label>
            <textarea type="text" name="description" placeholder="Description" value={this.state.description} onChange={ e => this.handleChange(e)}/>
            <label>First Brewed</label>
            <input type="text" name="first_brewed" placeholder="First Brewed" value={this.state.first_brewed} onChange={ e => this.handleChange(e)}/>
            <label>Brewers Tips</label>
            <input type="text" name="brewers_tips" placeholder="Brewers Tips" value={this.state.brewers_tips} onChange={ e => this.handleChange(e)}/>
            <label>Attenuation Level</label>
            <input type="number" name="attenuation_level" placeholder="Attenuation Level" value={this.state.attenuation_level} onChange={ e => this.handleChange(e)}/>
            <label>Contributed By</label>
            <input type="text" name="contributed_by" placeholder="Contributed By" value={this.state.contributed_by} onChange={ e => this.handleChange(e)}/>
            <br></br>
          <button type="submit">ADD NEW</button>
          </form>
        </div>
      </div>
      )
    } else {
      return <Redirect to="/"/>
    }

  }
}
export default NewBeer;