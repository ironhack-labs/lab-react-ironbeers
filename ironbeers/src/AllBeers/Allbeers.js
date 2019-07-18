import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import AddNewBeer from "../AddNewBeer/AddNewBeer";

class Allbeers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    Axios.get(`http://localhost:5000/all`).then(responseFromApi => {
      this.setState({
        listOfBeers: responseFromApi.data
      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {/* <AddNewBeer getData={() => this.getAllBeers()} /> */}
        <div className="allBeers">
          {this.state.listOfBeers.map(beer => {
            return (
              <div key={beer._id}>
                <Link to={`/detail/${beer._id}`}>
                  <h3 className="link">{beer.name}</h3>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Allbeers;
