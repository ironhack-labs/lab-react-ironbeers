import React, { Component } from 'react';
import Header from './Header';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class AllBeers extends Component {
  state = {
    beers: [],
  };
  componentDidMount() {
    Axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }
  handleChange = (e) => {
    const filteredBeerInput = e.target.value;
    console.log('Hello from onchange', filteredBeerInput);
    Axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${filteredBeerInput}`
    ).then((response) => {
      console.log(response.data);
      this.setState({ beers: response.data });
    });
  };
  render() {
    return (
      <div>
        <Header />
        <h2>Allbeers!</h2>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          onChange={this.handleChange}
        />
        {this.state.beers.map((beer, i) => {
          return (
            <div key={i}>
              <NavLink to={`/beers/${beer._id}`}> {beer.name}</NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
