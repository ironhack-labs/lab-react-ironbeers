import React from 'react';
import './RandomBeerPage.css';
import axios from 'axios';
import Header from '../../components/header/Header';

class RandomBeerPage extends React.Component {
  state = {
    beerInfo: [],
  };

  componentDidMount = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((randomBeer) => {
        console.log('responseBack:', randomBeer.data);
        this.setState({ beerInfo: randomBeer.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="randomBeer">
          <img src={this.state.beerInfo.image_url}></img>
          <h1>{this.state.beerInfo.name}</h1>
          <h3>{this.state.beerInfo.tagline}</h3>
          <h3>{this.state.beerInfo.first_brewed}</h3>
          <h3>{this.state.beerInfo.attenuation_level}</h3>
          <h4>{this.state.beerInfo.description}</h4>
          <h5>Contributed by: {this.state.beerInfo.contributed_by}</h5>
        </div>
      </div>
    );
  }
}

export default RandomBeerPage;
