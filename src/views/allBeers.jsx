import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class allBeers extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseFromApi) => {
        console.log(responseFromApi);
        this.setState({
          beers: responseFromApi.data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Beers page</h2>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
        {this.state.beers.map((beer) => {
          return (
            <div key={beer._id}>
              <img src={beer.image_url} alt={beer.name} />
              <Link to={`/oneBeer/${beer._id}`}>
                <h3>{beer.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
