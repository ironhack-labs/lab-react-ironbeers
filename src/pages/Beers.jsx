import React, { Component } from 'react';
import axios from 'axios';
import Header from "../components/Header/Header";
import BeerList from '../components/BeerList/BeerList';

class Beers extends Component {
  state = {
    beersList: []
  }

  componentDidMount() {
    // make a call to the backend API
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((responseDB) => {
        this.setState({ beersList: responseDB.data });
      })
      .catch(err => console.error(`Error occured to call the DB ${err}`))
  }

  render() {
    return (
      <div>
        <Header />
        <BeerList beerList={this.state.beersList}/>      
      </div>
    )
  }
}

export default Beers;