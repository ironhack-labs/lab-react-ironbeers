import React, { Component } from 'react';
import SingleBeer from './components/SingleBeer';
import axios from 'axios';

export default class RandomBeerLoader extends Component {
  constructor(){
    super();
    this.state = {
      beer: null
    }
  }
  
  componentDidMount(){
    if(!this.state.beer){
      this.getBeerById()
    }
  }

  getBeerById(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/random")
      .then(beer => {
        this.setState({beer: beer.data[0]})
      });
  }
  
  render() {
    let {beer} = this.state
    if(!beer){
      return <h1>Loading, please wait...</h1>
    } else {
      return (
          <SingleBeer beer={this.state.beer}/>
      );
    }
  }
}


