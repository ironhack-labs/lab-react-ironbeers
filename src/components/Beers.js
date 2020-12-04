import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Beers extends Component {
  state = {
    beers: '',
    search: '',
  };

  getBeerData = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      const beers = res.data;
      console.log(beers);
      this.setState({
        beers: beers,
      });
    });
  };

  componentDidMount() {
    this.getBeerData();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({
      search: value,
    });
    console.log('state', this.state);
  };

  render() {
    // const beers = this.state.beers
    // console.log('beers', this.state.beers);
    const beers = [...this.state.beers].filter(beer => {
      return beer.name.includes(this.state.search);
    });

    if (!this.state.beers)
      return (
        <>
          Chilling beers
        </>
      );

    return (
      <div className="all-beers">
        <form>
          <input
            type="text"
            placeholder="Search for a beer here"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>

        {beers.map((beer) => {
          return (
            <Link
              key={beer._id}
              to={`/${beer._id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className="beer-card">
                <img src={beer.image_url} alt="" width="30px" />
                <h2 className="h2">{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
