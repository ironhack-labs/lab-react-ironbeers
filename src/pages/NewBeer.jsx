import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import BeerApi from '../api/BeerApi';
import NavMain from '../components/NavMain';
import { withRouter } from 'react-router-dom';

class NewBeer extends Component {
  state = {};


  handleSubmit = (event) => {
    event.preventDefault();
    this.postBeer(this.state);
  }

  async postBeer(body) {
    try {
      await BeerApi.createOne(body);
      this.props.history.push('/')
    } catch (err) {
      console.log(err);
    }
  }

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    this.setState({
      [key]: value,
    });
  };

  render() {
    return (
      <div>
        <NavMain />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">name</label>
          <br />
          <input onChange={this.handleChange} name="name" type="text" />
          <br />
          <label htmlFor="tagline">tagline</label>
          <br />
          <input onChange={this.handleChange} name="tagline" type="text" />
          <br />
          <label htmlFor="description">description</label>
          <br />
          <input onChange={this.handleChange} name="description" type="text" />
          <br />
          <label htmlFor="first_brewed">first_brewed</label>
          <br />
          <input onChange={this.handleChange} name="first_brewed" type="text" />
          <br />
          <label htmlFor="brewers_tips">brewers_tips</label>
          <br />
          <input onChange={this.handleChange} name="brewers_tips" type="text" />
          <br />
          <label htmlFor="attenuation_level">attenuation_level</label>
          <br />
          <input
            onChange={this.handleChange}
            name="attenuation_level"
            type="number"
          />
          <br />
          <label htmlFor="contributed_by">contributed_by</label>
          <br />
          <input
            onChange={this.handleChange}
            name="contributed_by"
            type="text"
          />
          <br />
          <button  >Add this beer</button>
        </form>
      </div>
    );
  }
}

export default withRouter(NewBeer);
