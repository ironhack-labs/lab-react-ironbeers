import React from 'react';
import axios from 'axios';

class RandomBeer extends React.Component {
  state = {
    beers: {},
  };
  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((responseRandomBeer) => {
        this.setState({ beers: responseRandomBeer.data });
        console.log('this is my response', responseRandomBeer.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <p>
          <img src={this.state.beers.image_url} alt="" />
        </p>
        <p>{this.state.beers.name}</p>
        <p>{this.state.beers.tagline}</p>
        <p>{this.state.beers.first_brewed}</p>
        <p>{this.state.beers.attenuation_level}</p>
        <p>{this.state.beers.description}</p>
        <p>{this.state.beers.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;
