import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import BeerCard from './../BeerCard/BeerCard';
import FormInput from './../FormInput/FormInput'

import axios from 'axios'

export default class AllBeers extends Component {
  constructor() {
    super();

    this.state = {
      beers: null, 
      search: ''
    }

  }

  componentDidMount() {
    this.updateBeers();
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({[name]: value}, () => {
      this.updateBeers()
    });
  }

  updateBeers = () => {
    const query = this.state.search.length ? `https://ironbeer-api.herokuapp.com/beers/search?q=${this.state.search}` : 'https://ironbeer-api.herokuapp.com/beers/all';

    axios.get(query)
      .then(beers => {
        this.setState({...this.state, beers})
      })
  }

  render() {
    return (
      <div>
        <h1>All Beers</h1>

        <FormInput type="text" name="search" title="Search" onChange={this.handleChange} />

        {(this.state.beers) ? this.state.beers.data.map(beer => <BeerCard beer={beer} />) : <p>Loading...</p>}

      </div>
    )
  }
}
