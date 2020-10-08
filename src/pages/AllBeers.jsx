import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavMain from '../components/NavMain';
import BeerApi from '../api/BeerApi';

class AllBeers extends Component {
  state = {
    beers: [],
  };

  async componentDidMount() {
    try {
      const apiResponse = await BeerApi.getAllBeers();
      this.setState({ beers: apiResponse.data });
    } catch (error) {
      this.setState({ error: 'brocken' });
    }
  }

  render() {
    const { beers } = this.state;
    return (
      <div>
        <NavMain />
        <div>
          {beers.map((beer) => (
            <div key={beer._id} className="beer-container">
              <Link to={`/beers/${beer._id}`}>
                <img
                  className="small-img"
                  src={beer.image_url}
                  alt={beer.name}
                />
                <div>
                  <h2>{beer.name}</h2>
                  <h4>{beer.tagline}</h4>
                  <p>Created by: {beer.contributed_by}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default AllBeers;
