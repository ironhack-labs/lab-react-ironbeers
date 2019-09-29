import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import BeerCard from "./BeerCard";

class AllBeers extends Component {
  state = {
    beers: []
  };
  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(response => {
        console.log(response);
        const beersToRender=response.data.slice(0,30)
      this.setState({
        beers: beersToRender
      });
    });
  }
  render() {
    const beersToRender = this.state.beers.map((el, index) => {
      return (
        <div className="container">
          <BeerCard beerData={el} />
          {index < this.state.beers.length - 1 && <hr />}
        </div>
      );
    });
    return (
      <div>
        <Header />
        {beersToRender}
      </div>
    );
  }
}

export default AllBeers;
