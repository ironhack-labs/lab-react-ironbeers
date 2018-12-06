import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'

import NewBeerForm from './../NewBeerForm/NewBeerForm';

import axios from 'axios';

export default class NewBeer extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  handleFormSubmit = (event, beer) => {
    event.preventDefault();

    console.log(event, beer)

    axios.post('https://ironbeer-api.herokuapp.com/beers/new', beer)
      .then(res => {
        console.log(res);
        this.setState({...this.state, redirect: true})

      })
      .catch(error => {
        console.log(error.message);
      })
  }

  render() {
    return (
      <div>
        {(this.state.redirect) && <Redirect to="/" /> }
        <h1>New Beer</h1>

        <NewBeerForm onSubmit={this.handleFormSubmit} />

      </div>
    )
  }
}
