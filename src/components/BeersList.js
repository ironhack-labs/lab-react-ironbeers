import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeersList extends Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      console.log(response);
      this.setState({ beers: [...response.data] });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center">
        {this.state.beers.map((beer) => {
          return (
            <div className="d-flex m-2" key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt="Beer"
                  width="auto"
                  height="300px"
                />
              </Link>
              <div className="d-flex flex-column container">
                <Link to={`/beers/${beer._id}`}>
                  <strong>
                    <p
                      style={{ fontSize: '40px' }}
                      className="fs-1 fw-bold mt-5"
                    >
                      {beer.name}
                    </p>
                  </strong>
                </Link>
                <p>{beer.tagline}</p>
                <small>
                  <p>Created by: {beer.contributed_by}</p>
                </small>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BeersList;
