import React, { Component } from 'react';
import axios from 'axios';
import './RandomBeer.css';


export default class RandomBeer extends Component {

  state = {
    beer: null
  }
  
  getBeerData = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(response => {
        const beer = response.data;
        this.setState({
          beer: beer
        })
      })
  }

  componentDidMount() {
    this.getBeerData();
  }


  render() {
    const beer = this.state.beer

    if (!beer) return <>Loading</>
    return (
      <>
        <div className="beer-card" key={ beer._id }>
            <div className="beer-card-img">
                <img src={ beer.image_url } alt="beer"/>
            </div>
            <div className="beer-card-text">
                <h2>{ beer.name }</h2>
                <p>{ beer.tagline }</p>
                <p>{ beer.first_brewed }</p>
                <p>{ beer.attenuation_level }</p>
                <p>{ beer.description }</p>
                <h6>Created by: { beer.contributed_by }</h6>
            </div>
        </div>
      </>
    )
  }
}