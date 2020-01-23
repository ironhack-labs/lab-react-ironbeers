import React, { Component } from "react";
import axios from 'axios';

class RandomBeer extends Component{

  state = {
    randomBeer: false
  }

  componentDidMount(){
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(response => { this.setState( {randomBeer: response.data}) })
    .catch(error => { console.log(error) });
  };


  render(){
    return(
      <div>
        <h1>Random Beer</h1>
        <span>{
          this.state.randomBeer.name
        }</span>
      </div>
    );
  }
}

export default RandomBeer;