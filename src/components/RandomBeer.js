import React, { Component } from "react";
import axios from "axios";
import Navbar from '../components/navbar/Navbar';

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listOfBeers: []
    }
  } 
  getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };
  
  componentDidMount() {
    this.getAllBeers();
  }

  getRandomBeer = () => {
    const aRandomBeerIndex = this.listOfBeers[Math.floor(Math.random()* this.listOfBeers.length)];
    const aRandomBeer = this.props.listOfBeers[aRandomBeerIndex]

    this.setState({
      listOfBeers: aRandomBeer
      
    })
    console.log(this.listOfBeers)
  }

  render() {
    return(
      <div>
        <Navbar />
        <p>hi</p>
      </div>
    )
  }
}

export default RandomBeer;