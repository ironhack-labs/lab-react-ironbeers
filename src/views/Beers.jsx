import React, { Component } from 'react';
import axios from 'axios';
import HomeButtonHeader from '../components/HomeButtonHeader';
import { Link } from 'react-router-dom';

export class Beers extends Component {
  state = {
    beers: [],
    // filteredBeers: [],
    search: '',
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  handleSearch = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    axios
      .get(
        'https://ih-beers-api2.herokuapp.com/beers/search?q=' +
          this.state.search
      )
      .then((responseFromApi) => {
        this.setState({
          beers: responseFromApi.data,
        });
      });
  };

  render() {
    return (
      <div>
        <HomeButtonHeader />
        <input
          onChange={this.handleSearch}
          name="search"
          id="search"
          type="search"
          placeholder="Search..."
        />
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img
                  style={{ width: '100px' }}
                  src={beer.image_url}
                  alt={beer.name}
                />
                <p>{beer.name}</p>
                <p>{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
