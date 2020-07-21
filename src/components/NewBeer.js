
import React, { Component } from 'react';
import axios from 'axios';
export default class NewBeer extends Component {
state = {name: '', tagline: '', description: '', first_brewed: '', brewers_tips: '', attenuation_level: 0, contributed_by: '' };
changeHandler = (event) => {this.setState({[event.target.name]: event.target.value,});};
submitForm = (event) => {event.preventDefault(); axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);};
render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label htmlFor="beerName">beer name :</label>
          <input onChange={this.changeHandler} type="text" name="name" id="beerName" />
          <br />
          <label htmlFor="tagline">tagline :</label>
          <input onChange={this.changeHandler} type="text" name="tagline" id="tagline" />
          <br />
          <label htmlFor="descr">description :</label>
          <input onChange={this.changeHandler} type="text" name="description" id="descr" />
          <br />
          <label htmlFor="first_brewed">first brewed :</label>
          <input onChange={this.changeHandler} type="text" name="first_brewed" id="first_brewed" />
          <br />
          <label htmlFor="brewers_tips">brewers tips :</label>
          <input onChange={this.changeHandler} type="text" name="brewers_tips" id="brewers_tips" />
          <br />
          <label htmlFor="att_level">attenuation level :</label>
          <input onChange={this.changeHandler} type="number" name="attenuation_level" id="att_level" />
          <br />
          <label htmlFor="contri_by">contributed by :</label>
          <input onChange={this.changeHandler} type="text" name="contributed_by" id="contri_by" />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

