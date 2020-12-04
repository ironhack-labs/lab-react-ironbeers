import React from 'react';
import './SingleBeer.css';
import axios from 'axios';
import Header from '../header/Header';

class SingleBeer extends React.Component {
  state = {
    beerInfo: [],
  };

  componentDidMount = () => {
    console.log('Id is', this.props.match.params.id);
    axios
      .get(
        `https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`
      )
      .then((oneBeer) => {
        console.log('responseBack:', oneBeer.data);
        this.setState({ beerInfo: oneBeer.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log('BEER INFO', this.state.beerInfo.name);
    return (
      <div>
        <Header />
        <div className="oneBeer">
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

export default SingleBeer;
