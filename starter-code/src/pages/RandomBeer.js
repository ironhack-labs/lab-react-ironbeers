import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class RandomBeer extends Component {

  state = {
    randombeer: '',
    error: undefined,
    status: STATUS.LOADING,
  }
  
  componentDidMount = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then((response) => {
      this.setState({
        randombeer: response.data,
        status: STATUS.LOADED,
      })
    })
    .catch((error) => {
      this.setState({
        error: error.name,
        status: STATUS.ERROR,
      })
    })
  }

  render() {
    const { randombeer } = this.state;
    return (
      <div>
        <Header />
        <img className="single-beer-img" src={randombeer.image_url} alt=""/>
        <div className="single-beer-name">
          <h2>{randombeer.name}</h2>
          <p>{randombeer.attenuation_level}</p>
        </div>
        <div>
          <p>{randombeer.tagline}</p>
          <p>{randombeer.first_brewed}</p>
        </div>
        <p>{randombeer.description}</p>
        <p>{randombeer.contributed_by}</p>
      </div>
    );
  }
}

export default RandomBeer;