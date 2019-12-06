import React, { Component } from 'react';
import axios from "axios";
import { StyledForm } from '../../styles/components';

export default class AddBeerComp extends Component {
  state = {
    beer : {
      name: "",
      tagline: "",
      description: "",
      first_brewed: "",
      brewers_tips: "",
      attenuation_level: "",
      contributed_by:"",
    }
  }

  inputChange = ({target: {value, name} }) => {
    this.setState({
      ...this.state,
      beer: {
        ...this.state.beer,
        [name]: value
      }
    });
  };

  addBeer = async e => {
    e.preventDefault();
    const { beer } = this.state;
    const { data } = await axios.post(
      "https://ih-beers-api2.herokuapp.com/beers/new",
      beer
    );
    console.log(data) 
  }

  render () {
    return (
      <StyledForm onSubmit={this.addBeer}>
        <h1>New</h1>
       <label htmlFor="name">Name</label>
       <br/>
       <input 
          value={this.state.beer.name}
          type="Text" 
          name="name"
          onChange={this.inputChange}
        />
       <br/>
       <label htmlFor="tagline">Tagline</label>
       <br/>
       <input 
          value={this.state.beer.tagline}
          type="Text" 
          name="tagline"
          onChange={this.inputChange}
        />
       <br/>
       <label htmlFor="Description">Description</label>
       <br/>
       <input 
          value={this.state.beer.description}
          type="Text" 
          name="description"
          onChange={this.inputChange}
        />
       <br/>
       <label htmlFor="first_brewed">First Brewed</label>
       <br/>
       <input 
          value={this.state.beer.first_brewed}
          type="Text" 
          name="first_brewed"
          onChange={this.inputChange}
        />
       <br/>
       <label htmlFor="brewers_tips">Brewers Tips</label>
       <br/>
       <input 
          value={this.state.beer.brewers_tips}
          type="Text" 
          name="brewers_tips"
          onChange={this.inputChange}
        />
       <br/>
       <label htmlFor="attenuation_level">Attenuation Level</label>
       <br/>
       <input 
          value={this.state.beer.attenuation_level}
          type="Number" 
          name="attenuation_level"
          onChange={this.inputChange}
        />
        <br/>
       <br/>
       <label htmlFor="contributed_by">Contributed By</label>
       <br/>
       <input 
          value={this.state.beer.contributed_by}
          type="Text" 
          name="contributed_by"
          onChange={this.inputChange}
        />
        <br/>
        <input type="submit" value="Add Beer"/>

      </StyledForm>
    )
  }
}