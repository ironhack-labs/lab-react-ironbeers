import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class RandomBeer extends React.Component {
  state = {
    randomBeer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((beer) => this.setState({ randomBeer: beer.data }))
      .catch((error) => console.error(error));
  }

  render() {
    let { randomBeer } = this.state;

    return (
      <div>
        <div>
          <div className="mt-5">
            <img src={randomBeer.image_url} />
            <h2 className="mt-4">{randomBeer.name}</h2>
            <h3 className="mt-2">{randomBeer.tagline}</h3>
            <h4 className="mt-2">{randomBeer.contributed_by}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
