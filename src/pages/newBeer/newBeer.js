import React, { Component } from 'react';
import Header from '../../components/header/Header';
import axios from 'axios';
import './newBeer.css';

class newBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewerTips: '',
    attenuation: 0,
    contributedBy: '',
    message: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.firstBrewed,
      brewers_tips: this.state.brewerTips,
      attenuation_level: this.state.attenuation,
      contributed_by: this.state.contributedBy,
    };
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
      .then((res) => {
        this.setState({
          message: res.data.message,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <h6>{this.state.message}</h6>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Tagline</label>
          <br />
          <input
            type="text"
            name="tagline"
            value={this.state.tagline}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Description</label>
          <br />
          <textarea
            cols="4"
            rows="8"
            name="description"
            onChange={this.handleChange}
          >
            {this.state.description}
          </textarea>
          <br />
          <label>First Brewed</label>
          <br />
          <input
            type="text"
            name="firstBrewed"
            value={this.state.firstBrewed}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Brewer tips</label>
          <br />
          <input
            type="text"
            name="brewerTips"
            value={this.state.brewerTips}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Attenuation level</label>
          <br />
          <input
            type="number"
            name="attenuation"
            value={this.state.attenuation}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Contributed by</label>
          <br />
          <input
            type="text"
            name="contributedBy"
            value={this.state.contributedBy}
            onChange={this.handleChange}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default newBeer;
