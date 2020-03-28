import React, { Component } from "react";
import './RandomBeer.css'
import Header from "../Header/Header";
import axios from "axios";

class RandomBeer extends Component {
  state = {
    randomBeer: ''
  };

  getRandomBeer = () => {
    const randomURL = "https://ih-beers-api2.herokuapp.com/beers/random";
    axios
      .get(randomURL)
      .then(beers => {
        this.setState({
            randomBeer: beers.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div>
        <Header />
            <div className="random-beer">
              <img src={this.state.randomBeer.image_url} alt="Random Beer" />
              <h2>{this.state.randomBeer.name}</h2>
              <p>{this.state.randomBeer.description}</p>
            </div>
      </div>
    );
  }
}

export default RandomBeer;
