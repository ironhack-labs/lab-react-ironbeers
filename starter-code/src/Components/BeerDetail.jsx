import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header'
export default class BeerDetail extends Component {

  state = {
    beer: {},
  }

  async componentDidMount() {
    if (this.props.random) {
      const beer = await this.getRandomBeer();
      this.setState({ beer });
    } else {
      const beer = await this.getSingleBeer();
      this.setState({ beer });
    }
  }

  getSingleBeer = async () => {
    const  { id } = this.props.match.params;
    const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
    return response.data
  }

  getRandomBeer = async () => {
    const response  = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random');
    return response.data
  }

  render() {
    const { beer } = this.state;
    return (
    <div className="beer-detail">
      <Header />
      <div className="card">
        <img className="card-img-top" src={beer.image_url} alt="beer" style={{width: '100px', margin: '50px auto 0 auto'}}></img>
        <div className="card-body">
          <h5 className="card-title">{beer.name}<span className="text-muted right">{beer.attenuation_level}</span></h5> 
          <h6 className="card-subtitle mb-2 text-muted">{beer.tagline}<span className="right" style={{color: 'black', fontWeight: 800}}>{beer.first_brewed}</span></h6>
          <p className="card-text">{beer.description}</p>
          <p><small className="text-muted">{beer.contributed_by}</small></p>
        </div>
      </div>
    </div>

    )
  }

}