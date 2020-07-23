import React, { Component } from 'react';
import apiHandler from './../api/apiHandler';
import { Link } from 'react-router-dom';
import BeerBox from '../components/BeerBox';

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
      <div>
        {this.state.beers.map((beer) => (
          <Link to={'/' + beer._id} key={beer._id}>
            <BeerBox
              name={beer.name}
              image={beer.image_url}
              tagline={beer.tagline}
              contributor={beer.contributed_by}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default Beers;
