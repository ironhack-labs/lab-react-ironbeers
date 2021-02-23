import React from 'react';
import axios from 'axios';
import './Random.css';

class Random extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        const beers = response.data;
        console.log('Radom Beer Page: ', beers);
        this.setState({ beers });
      });
  }
  randomBeer = (e) => (
    <div key={this.state.beers.key}>
      <img src={this.state.beers.image_url} alt="beers" />
      <div>
        <h4>{this.state.beers.name}</h4>
        <p>{this.state.beers.attenuation_level}</p>
        <p>{this.state.beers.tagline}</p>
        <p>{this.state.beers.first_brewed}</p>
        <p>{this.state.beers.description}</p>
        <i>{this.state.beers.contributed_by}</i>
      </div>
    </div>
  );

  render() {
    return <div className="randomcontainer">{this.randomBeer()}</div>;
  }
}

export default Random;
