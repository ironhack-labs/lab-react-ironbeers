import React, { Component } from 'react';
import axios from 'axios';

class newBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      //The target event property returns the element that triggered the event.
      //Events are objects with certain properties, and event.target almost always represents a DOM element.
      //Thus event.target.value is the value property of some DOM element, in this case that means the text entered
      //in the search input.
      [event.target.name]: event.target.value,
    });
  };

  submitForm = (event) => {
    //Default for submit button is to refresh the page. In ReactJS we want to stay in the same page.
    event.preventDefault();
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state);
    // console.log('I submitted');
    // console.log(submit);
    // console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label isfor="beerName">Beer Name:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="beerName"
          />
          <br />
          <label isfor="tagline">Tagline:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="tagline"
            id="tagline"
          />
          <br />
          <label isfor="descr">Description:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
            id="descr"
          />
          <br />
          <label isfor="first_brewed">First Brewed:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="first_brewed"
            id="first_brewed"
          />
          <br />
          <label isfor="brewers_tips">Brewers Tips</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="brewers_tips"
            id="brewers_tips"
          />
          <br />
          <label isfor="att_level">Attenuation level</label>
          <input
            onChange={this.handleChange}
            type="number"
            name="attenuation_level"
            id="att_level"
            placeholder="0"
          />
          <br />
          <label isfor="contri_by">Contributed by</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contributed_by"
            id="contri_by"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default newBeer;
