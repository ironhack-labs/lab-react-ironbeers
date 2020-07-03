import React, { Component } from 'react';

import axios from 'axios';

class NewBeer extends Component {
  state = {
    name: '',
    attenuation_level: 0,
    tagline: '',
    description: '',
    list: {},
    first_brewed: '',
    brewers_tips: '',
    by: '',
    beers: 0,
    showForm: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  addBeer = event => {
    event.preventDefault();
    let newBeerObj = {
      attenuation_level: this.state.attenuation_level,
      brewers_tips: this.state.brewers_tips,
      contributed_by: this.state.contributed_by,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      name: this.state.name,
      tagline: this.state.tagline
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeerObj)
      .then(res => {
        console.log(res);
      });
    this.setState({
      list: newBeerObj,
      showForm: false
    });
    console.log(newBeerObj);
  };

  render() {
    console.log(this.state.list);
    return (
      <div className="newBeer">
        <button onClick={this.toggleForm}>Add a New beer</button>
        {this.state.showForm ? (
          <form onSubmit={this.addBeer}>
            <label>Name:</label>
            <br />
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Tagline:</label>
            <br />
            <input onChange={this.handleChange} type="text" name="tagline" />
            <br />
            <label>Description:</label>
            <br />
            <textarea
              onChange={this.handleChange}
              type="text"
              name="description"
            />
            <br />
            <label>First Brewed:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="first_brewed"
            />
            <br />
            <label>Brewers Tips:</label>
            <input onChange={this.handleChange} type="text" name="tips" />
            <br />
            <label>Attenuation Level:</label>
            <input
              onChange={this.handleChange}
              type="number"
              name="attenuation_level"
            />
            <br />
            <label>Contributed By:</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="contributed_by"
            />
            <br />
            <br />
            <input className="submit" type="submit" />
          </form>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default NewBeer;
