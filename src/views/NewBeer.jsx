import React, { Component } from 'react';
import Header from '../Components/Header';
import apiHandler from '../api/apiHandler';
import { Link } from 'react-router-dom';
import '../styles/beers.css'


export class NewBeer extends Component {
  state = {
    name: null,
    tagline: null,
    description: null,
    first_brewed: null,
    brewers_tips: null,
    attenuation_level: null,
    contributed_by: null,
    redirection: false
  };

  handleChange = (event) => {
    console.log(event.target);
    const key = event.target.name;
    let value;
    value = event.target.value;
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    const newBeer = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };

    apiHandler
      .createNewBeer(newBeer)
      .then((apiRes) => {
        console.log(apiRes);
        console.log('POST request done with success !');
        this.setState( {redirection : true})
      })
      .catch((err) => console.error(err));
  };

  render() {

    if (this.state.redirection) {
        return (
        <div> 
        <Header />
        <div id="newBeer_success" className="column">
        <div> New beer added in collection !</div>
        <div> Go check it out :) </div>
        </div>
        <Link className="link_newBeer" to="/beers"> Collection </Link>
        
        </div>
        )
        
      
    }

    return (
      <div>
        <Header />
        <form id="form_newBeer" onSubmit={this.handleSubmit} className="column">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />

          <label htmlFor="tagline"> Tagline </label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            onChange={this.handleChange}
          />

          <label htmlFor="description"> Description </label>
          <input 
            type="textarea"
            rows="4" cols="10"
            id="description"
            name="description"
            onChange={this.handleChange}
          />

          <label htmlFor="firstBrewed"> First Brewed </label>
          <input
            type="text"
            id="firstBrewed"
            name="first_brewed"
            onChange={this.handleChange}
          />

          <label htmlFor="brewerTips"> Brewer Tips </label>
          <input
            type="text"
            id="brewerTips"
            name="brewers_tips"
            onChange={this.handleChange}
          />

          <label htmlFor="attenuationLevel"> Attenuation Level </label>
          <input
            type="number"
            min="0"
            id="attenuationLevel"
            name="attenuation_level"
            onChange={this.handleChange}
          />

          <label htmlFor="contributerBy"> Contributed by </label>
          <input
            type="text"
            id="contributerBy"
            name="contributed_by"
            onChange={this.handleChange}
          />

          <button className="link_newBeer" >ADD NEW</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
