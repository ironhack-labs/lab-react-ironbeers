import React, { Component } from 'react';
import BeerCard from './partials/BeerCard';

// import { NavLink } from 'react-router-dom'
import axios from 'axios';

class AllBeers extends Component {

  state = {
    beers : []
  }

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then((results) => {
      this.setState({beers:results.data})
    }).catch(err => console.log("Error : ", err))
  }

  render() {
    return (
      <div className="page">
        <div className="marginContainer">
          {this.state.beers.map((b, i) => (
            <BeerCard beer={b} key={i}/>
          ))}
        </div>
      </div>
    )
  }

}

export default AllBeers;
