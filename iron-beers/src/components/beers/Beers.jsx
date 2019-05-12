import React, { Component } from 'react';
import BeerCard from './BeerCard';
// import NewBeer from '../newbeer/NewBeer'
import axios from 'axios';
// import { Link } from 'react-router-dom';

class Beer extends Component {
  constructor() {
    super();
    this.state = {
      beersList: []
    }
  }

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
        this.setState({beersList: response.data})
    })
  }

  render() {
    console.log(this.state.beersList)
    return (
      <div className="foods-container">
        {
        this.state.beersList.map((OneBeer, index) => {
          return <BeerCard key={index} {...OneBeer}/>
        })
        }
      </div>
    )  
  }
}

export default Beer;