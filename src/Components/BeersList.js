import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from './Header';

class BeersList extends Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({ beers: [...response.data] });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.beers.map((beer) => (
          <Link style={{textDecoration: 'none'}} to={`/beers/${beer._id}`} key={beer._id}>
            <div              
              className="beerCard d-flex list-group-item list-group-item-action"
              style={{ maxHeight: '90vh' }}
            >
              <div className="imageContainer mr-5 d-flex align-items-center">
                <img
                  style={{ width: '50px', height: 'auto' }}
                  src={beer.image_url}
                  alt={`${beer.name} beer`}
                />
              </div>
              <div className="beerDetails d-flex flex-column justify-content-center m-2">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <span>
                  <strong>Created by: </strong>
                  {beer.contributed_by}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default BeersList;
