import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
class NewBeer extends Component {
  state = {
    list: {},
    showForm: false,
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.ShowForm,
    });
  };
  addBeer = (e) => {
    e.preventDefault();
    let newBeerObj = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, newBeerObj)
      .then((res) => {
        console.log(res);
      });
    this.setState({
      list: newBeerObj,
    });
    console.log(newBeerObj);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state.list);
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <h1>Enter the New Beer</h1>
        <button onClick={this.toggleForm}>New beer</button>
        {this.state.showForm ? (
          <form onSubmit={this.addBeer}>
            <label>Name</label>
            <input onChange={this.handleChange} type="'text" name="name" />
            <br />
            <label>Tagline</label>
            <input onChange={this.handleChange} type="'text" name="tagline" />
            <br />
            <label>Description</label>
            <input
              onChange={this.handleChange}
              type="'text"
              name="description"
            />
            <br />
            <label>First Brewed</label>
            <input
              onChange={this.handleChange}
              type="'text"
              name="first_brewed"
            />
            <br />
            <label>Brewers Tips</label>
            <input
              onChange={this.handleChange}
              type="'text"
              name="brewers_tips"
            />
            <br />
            <label>Attenuation Level</label>
            <input
              onChange={this.handleChange}
              type="'number"
              name="attenuation_level"
            />
            <br />
            <label>Contributed By</label>
            <input
              onChange={this.handleChange}
              type="'text"
              name="contributed_by"
            />
            <br />
            <input type="submit" />
          </form>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default NewBeer;
