import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Beers extends Component {
  state = {
    beerList: [],
  };

  componentDidMount = async () => {
    const ApiBeers = await axios.get('https://api.punkapi.com/v2/beers');
    this.setState({ beerList: ApiBeers.data });
    console.log(ApiBeers.data)
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="beer-list">
          <h1>ALL BEERS</h1>
          {this.state.beerList.map((mapBeer) => {
            return (
              <div className="beer-image" key={mapBeer.id}>
                <img
                  src={mapBeer.image_url}
                  alt={mapBeer.name}
                  style={{ width: 45 }}
                />
                <div>
                  <h4>
                    <Link
                      to={{
                        pathname: `/beers/${mapBeer.id}`,
                      }}
                    >
                      Check out {mapBeer.name}
                    </Link>
                  </h4>
                  <div className = "beer-post">
                  <h5>{mapBeer.name}</h5>
                  <h5>{mapBeer.tagline}</h5>
                  <h6>Created by: {mapBeer.contributed_by}</h6>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Beers;
