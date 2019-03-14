import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      randomBeer: {}
    };
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        this.setState({
          randomBeer: responseFromApi.data[0]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div>
        <div>
          <Header />
          <img
            src={this.state.randomBeer.image_url}
            alt=""
            style={{ width: "20%" }}
          />
          <h1>{this.state.randomBeer.name}</h1>
          <h2>{this.state.randomBeer.tagline}</h2>
          <p>{this.state.randomBeer.first_brewed}</p>
          <p>{this.state.randomBeer.attenuation_level}</p>
          <p>{this.state.randomBeer.description}</p>
          <p>{this.state.randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeer;
