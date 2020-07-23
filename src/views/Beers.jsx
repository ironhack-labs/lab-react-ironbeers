import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiHandler from '../api/apiHandler';
import Header from './../components/Header';

export class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    apiHandler
      .getAllBeers()
      .then((apiRes) => {
        this.setState({ beers: apiRes.data });
      })
      .catch((apiError) => console.log(apiError));
  }

  render() {
    return (
      <div className="disp-beers">
        <Header />
        <div className="beers-container">
          {this.state.beers.map((beer) => {
            return (
              <div className="one-beer" key={beer._id}>
                <img className="img-onebeer" src={beer.image_url} alt="beer" />
                <Link to={'/beers/' + beer._id} key={beer._id}>
                  <h2>{beer.name}</h2>{' '}
                </Link>

                <p className="tagline">{beer.tagline}</p>
                <p>{beer.contributed_by}</p>
              </div>
            );
          })}
          )
        </div>
      </div>
    );
  }
}

export default Beers;
