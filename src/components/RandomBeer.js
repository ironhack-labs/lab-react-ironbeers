import React, { Component } from "react";
import axios from "axios";
import Navbar from '../components/navbar/Navbar';

class RandomBeer extends Component {
  constructor(){
    super();
    this.state= { aRandomBeer: {}};
  }
  
  componentDidMount() {
    this.getSingleBeer();
  }
  
  getSingleBeer = () => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        const beerRandom = responseFromApi.data;
        this.setState({aRandomBeer: beerRandom});
        console.log(this.state)
      })
      .catch(err => {
        console.log(err);
      });
  };

  


render() {
  const { aRandomBeer } = this.state;
  return(
    <div>
      <Navbar />
      <p>hi {aRandomBeer.name}</p>
    </div>
  )
  }
}

export default RandomBeer;