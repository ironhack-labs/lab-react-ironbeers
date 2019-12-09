import React, { Component } from 'react';
import Navbar from "../Navbar/Navbar";
import getRandomBeer from "../../services/getRandomBeer";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: []
    }
  }

  async componentDidMount() {
    try {
      const randomBeer = await getRandomBeer()
      this.setState({
        randomBeer: randomBeer
      })
      //console.log(this.state.randomBeer)
    }
    catch(err) {
      console.log(err);
      throw(err);
    }
  }  
  render() { 
    const randomBeer = this.state.randomBeer;     
    const beerCard = (
      <div key={randomBeer._id}>
      <img src={randomBeer.image_url} alt=""></img>  
      <p>{randomBeer.name}</p>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>Descripton level: {randomBeer.description}</p>
      <p>Created by: {randomBeer.contributed_by}</p>
      </div>
    );

    return (
      <div>
        <Navbar />
        {beerCard}
      </div>
    )
  }
}

export default RandomBeer
