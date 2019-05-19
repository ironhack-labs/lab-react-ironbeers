import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

let time;

class Beers extends Component {
  state = {
    allBeers: []
  };

  componentDidMount() {
    console.log("hi");
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        console.log("the list of beers info ----------- ", response);
        this.setState({ allBeers: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  ShowBeers = () => {
    return this.state.allBeers.map((allBeers, i) => {
      return (
        <div key={i} className="beerslice">
          <img className="beerimg" src={allBeers.image_url} alt="" />
          <Link exact to={`/beerDetails/${allBeers._id}`}>
            <h3>{allBeers.name}</h3>
          </Link>
          <h4>{allBeers.tagline}</h4>
          <p>{allBeers.description}</p>
          <p>Contributed by: {allBeers.contributed_by}</p>
        </div>
      );
    });
  };

  searchBeers = e => {
    let query = e.target.value;
    clearTimeout(time);
    time = setTimeout(() => {
      axios
        .get(`https://ih-beer-api.herokuapp.com/beers/search?q=${query}`)
        .then(result => {
          this.setState({
            allBeers: result.data
          });
        });
    }, 1000);
  };

  render() {
    return <div>{this.ShowBeers()}</div>;
  }
}

export default Beers;
