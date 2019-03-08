import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Beer from "./BeerIndividual";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { allBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(allBeers => {
        this.setState({ allBeers: allBeers.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ marginBottom: "50px" }}>
          Take a look at all our beers available!
        </h1>
        {this.state.allBeers.map((current, index) => {
          return <Beer beerinfo={current} key={index} />;
        })}
      </div>
    );
  }
}

export default Beers;
