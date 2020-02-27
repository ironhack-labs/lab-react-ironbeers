import React from "react";
import "./Beers.css";
import axios from "axios";
import BeerDetail from "./BeerDetail";

// import axios from "axios";

class RandomBeer extends React.Component {
  state = {
    beer: {}
  };
  componentDidMount() {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then(beer => {
        beer = beer.data;
        this.setState({
          beer: beer
        });
      });
  }
  render() {
    return <BeerDetail beer={this.state.beer}></BeerDetail>;
  }
}
export default RandomBeer;
