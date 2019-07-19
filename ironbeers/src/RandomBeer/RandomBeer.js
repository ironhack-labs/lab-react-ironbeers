import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import HomeBtn from "../HomeBtn/HomeBtn";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randomBeer: {}
    };
  }

  getRandomBeer = () => {
    Axios.get(`http://localhost:5000/random`).then(responseFromApi => {
      console.log(responseFromApi.data);
      this.setState({
        randomBeer: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  render() {
    return (
      <div className="one">
        <HomeBtn />
        <h1>{this.state.randomBeer.name}</h1>
        <img
          style={{ width: "300px", height: "500px" }}
          src={this.state.randomBeer.image_url}
          alt={this.state.randomBeer.name}
        />
        <p>{this.state.randomBeer.tagline}</p>
      </div>
    );
  }
}
//www.scalsys.com/1pngs/home-icon-png-transparent/home_icon_png_transparent_667603.jpg
export default RandomBeer;
