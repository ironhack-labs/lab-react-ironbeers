import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class AllBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        // console.log(response);
        this.setState({ beers: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <div
                style={{ fontSize: 12, display: 'flex', alignItems: 'center' }}
                className="beer-list"
              >
                <div>
                  <Link to={`/beers/${beer._id}`}>
                    <img
                      style={{ width: 50, margin: 30 }}
                      src={beer.image_url}
                      alt={beer.image_url}
                    />
                  </Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h2 style={{ textAlign: 'left' }}>{beer.name}</h2>
                  <p style={{ textAlign: 'left' }}>
                    <i>{beer.tagline}</i>
                  </p>
                  <p style={{ textAlign: 'left' }}>{beer.contributed_by}</p>
                </div>
              </div>
              <hr style={{ borderTop: '1px solid grey' }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
