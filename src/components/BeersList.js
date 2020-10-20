import React, { Component } from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';
import Header from './Header';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      search: '',
    };
  }

  componentDidMount() {
    this.search('');
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.search(value);
  };

  search = (query) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
      .then((allBeers) => {
        console.log(allBeers);
        this.setState({
          beers: allBeers.data,
          search: query,
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <h2>Search:</h2>
        <input
          className="input-search"
          onChange={this.handleChange}
          type="text"
          name="search"
        ></input>
        {this.state.beers.map((item) => (
          <BeerDetails key={item._id} {...item} />
        ))}
      </>
    );
  }
}

export default Beers;
