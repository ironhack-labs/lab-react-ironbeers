import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';
import BeerList from './components/BeerList';

class App extends Component {
  constructor(){
    super();
    this.state = {
      beer: null
    }
  }
  
  // componentDidMount(){
  //   if(!this.state.beer){
  //     this.getBeerById()
  //   }
  // }

  // getBeerById(){
  //   axios.get("https://ironbeer-api.herokuapp.com/beers/random")
  //     .then(beer => {
  //       this.setState({beer: beer.data[0], loading: false})
  //     });
  // }
  
  render() {
    return (
      <BeerList/>
    )
  }
}

export default App;
