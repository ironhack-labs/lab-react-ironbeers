import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';

class AllBeers extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(response => {
      this.setState({beers: response.data})
    })
  }

  showBeers = () => {
    let list = this.state.beers.map((beer) => {
      return ( 
        <h1>{beer.name}</h1>
        )
    })
    return list;
  }


  render() {
    return (
      <div className="AllBeers">
        <h1>{this.showBeers()}</h1>
      </div>
    );
  }
}

export default AllBeers;