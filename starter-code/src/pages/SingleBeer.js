import React, { Component } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const STATUS = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

class SingleBeer extends Component {

  state = {
    beer: '',
    error: undefined,
    status: STATUS.LOADING,
  }
  
  componentDidMount = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({
        beer: response.data,
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
    console.log('props', this.props);
    const { beer } = this.state;
    return (
      <div>
        <Header />
        <img className="single-beer-img" src={beer.image_url} alt=""/>
        <div className="single-beer-name">
          <h2>{beer.name}</h2>
          <p>{beer.attenuation_level}</p>
        </div>
        <div>
          <p>{beer.tagline}</p>
          <p>{beer.first_brewed}</p>
        </div>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    );
  }
}

export default SingleBeer;