import axios from 'axios';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BeerList from './BeerList';
import SearchForm from './SearchForm';

class BeersPage extends Component {
  constructor() {
    super();

    this.state = {
      list: undefined,
    };
  }

  componentDidMount = () => this.loadBeers();

  loadBeers = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => this.setState({ list: response.data }))
      .catch((err) =>
        console.error('Error trying to get the beers data from the API', err)
      );
  };

  filterList = (query) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((response) => this.setState({ list: response.data }))
      .catch((err) =>
        console.error('Error trying to get the beers data from the API', err)
      );
  };

  render = () => (
    <Container>
      <h2>All Beers</h2>

      <SearchForm filterList={this.filterList} />

      {this.state.list ? (
        <BeerList list={this.state.list} />
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}

export default BeersPage;
