import React, { Component } from 'react';
import axios from 'axios';

class randomBeer extends Component {
  state = {
    oneBeer: '',
  };

  async componentDidMount() {
    let randomBeer = await axios.get(
      'https://ih-beers-api2.herokuapp.com/beers/random'
    );

    // console.log(randomBeer);

    this.setState({
      oneBeer: randomBeer.data,
    });

    console.log(this.state);
  }

  displayOneRandom = () => {
    return (
      <div>
        <img src={this.state.oneBeer.image_url} alt="one beer" />
        <h4>{this.state.oneBeer.name}</h4>
        <p>{this.state.oneBeer.tagline}</p>
        <p>{this.state.oneBeer.first_brewed}</p>
        <p>{this.state.oneBeer.attenuation_level}</p>
        <p>{this.state.oneBeer.description}</p>
        <p>{this.state.oneBeer.contributed_by}</p>
      </div>
    );
  };

  render() {
    return <div>{this.displayOneRandom()}</div>;
  }
}

export default randomBeer;
