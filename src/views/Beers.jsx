import React, { Component } from 'react';
import axios from 'axios';
import HomeButtonHeader from '../components/HomeButtonHeader';
import { Link } from 'react-router-dom';

export class Beers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        this.setState({
          beers: responseFromApi.data,
        });
        console.log(this.state.beers);
      });
  }

  render() {
    return (
      <div>
        <HomeButtonHeader />
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url} alt={beer.name} />
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
