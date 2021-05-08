import axios from 'axios';
import React from 'react';
import NavBar from './NavBar';

class RandomBeer extends React.Component {
  state = {
    randomBeer: [],
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((result) => {
        this.setState({ ...this.state, randomBeer: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.randomBeer.length === 0 ? (
          <h2>Loading...</h2>
        ) : (
          <div>
            <NavBar />
            <h1>RandomBeers</h1>
            <img
              src={this.state.randomBeer.image_url}
              alt={this.state.randomBeer.name}
              className="Beers-img"
            />
            <h4>{this.state.randomBeer.name}</h4>
            <p>{this.state.randomBeer.tagline}</p>
            <p>{this.state.randomBeer.first_brewed}</p>
            <p>{this.state.randomBeer.attenuation_level}</p>
            <p>{this.state.randomBeer.description}</p>
            <p>{this.state.randomBeer.contributed_by}</p>
          </div>
        )}
      </div>
    );
  }
}
export default RandomBeer;
