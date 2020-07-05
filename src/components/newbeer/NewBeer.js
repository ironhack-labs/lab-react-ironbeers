import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class NewBeer extends Component {
  state = {

  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", this.state)
    .then(res => {
      // checks for 200 from server
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <header>
          <Link to="/">Home</Link>
        </header>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name"></input>
          <label htmlFor="tagline">Tagline: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="tagline"
          ></input>
          <label htmlFor="description">description: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="description"
          ></input>
          <label htmlFor="first-brewed">first-brewed: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="first-brewed"
          ></input>
          <label htmlFor="brewers_tips">brewers_tips: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="brewers_tips"
          ></input>
          <label htmlFor="attenuation">attenuation: </label>
          <input
            onChange={this.handleChange}
            type="number"
            name="attenuation"
          ></input>
          <label htmlFor="contributed_by">contributed_by: </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="contributed_by"
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;