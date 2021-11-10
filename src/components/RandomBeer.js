import React from 'react';
import Nav from './Nav';
import axios from 'axios';

class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {},
    };
  }

  getRandomBeer() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({ randomBeer: response.data });
      })
      .catch((e) => {
        console.log('error getting beers from API', e);
      });
  }

  componentDidMount() {
    this.getRandomBeer()
  }
  render() {
    return (
      <div className="single-beer">
        <Nav />
        <div>
          <div>
            <img
              src={this.state.randomBeer.image_url}
              alt="beer"
              style={{ height: '400px' }}
            />
          </div>
          <div>
            <h2>{this.state.randomBeer.name}</h2>
            <h3>{this.state.randomBeer.tagline}</h3>
            <h4>First brewed: {this.state.randomBeer.first_brewed}</h4>
            <h5>
              Attenuation level: {this.state.randomBeer.attenuation_level}
            </h5>
            <p>{this.state.randomBeer.description}</p>
            <p>By: {this.state.randomBeer.contributed_by}</p>
          </div>
        </div>
        <button onClick={() => this.getRandomBeer()}>
          Get new random beer
        </button>
      </div>
    );
  }
}
export default RandomBeer;
