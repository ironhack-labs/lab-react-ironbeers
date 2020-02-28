import React, { Component } from "react";
import Header from "./Header.js";
import axios from "axios";
import FullCard from "./FullCard";

class RandomBeer extends Component {

    state = {
      randomBeer: {}
    };
  


  allBeers(){
       let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(e => {
      this.setState({
        randomBeer: e.data[randomInt(0, e.data.length)]
      });
      console.log(this.state.randomBeer);
    });
  };

  componentDidMount() {
    this.allBeers();
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <FullCard data={this.state.randomBeer} />
        </div>
      </div>
    );
  }

}
export default RandomBeer;
