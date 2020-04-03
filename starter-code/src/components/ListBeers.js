import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ListBeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = async () => {
    await axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(responseApi => {
        this.setState({ listOfBeers: responseApi.data });
      })
      .catch(err => {
        console.log(err);
      });
    // console.log(this.state.listOfBeers);
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        test
        {this.state.listOfBeers.map(beer => {
          return (
            <div key={beer._id}>
              <Link to={beer._id}>
                <h3>{beer.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListBeers;
