import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import { Link } from 'react-router-dom';
import './AllBeers.css';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((beers) => {
      console.log('allbeers', beers.data);
      this.setState({
        beers: beers.data,
      });
    });
  };

  render() {
    if (!this.state.beers) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Header />
        <div className="allbeers">
          {this.state.beers.map((beer) => {
            return (
              <Link to={`/beers/${beer._id}`} key={beer._id}>
                <div className="all-card">
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${beer.image_url})` }}
                  ></div>
                  <div className="all-text">
                    <h2>{beer.name}</h2>
                    <h6>{beer.tagline}</h6>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllBeers;
