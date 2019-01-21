import React, { Component } from "react";
import Header from "./Header.jsx";
import axios from "axios";
import FullCard from "./FullCard";
class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      randombeer: {}
    };
  }

  allBeers = () => {
    axios.get(`https://ironbeer-api.herokuapp.com/beers/random`).then(e => {
      this.setState({
        randombeer: e.data[0]
      });
      console.log(this.state.randombeer);
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
          <FullCard data={this.state.randombeer} />
        </div>
      </div>
    );
  }
}

export default RandomBeer;
