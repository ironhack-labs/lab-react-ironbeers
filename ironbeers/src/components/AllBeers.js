import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import "./AllBeers.css";
import { Link } from "react-router-dom";

class AllBeers extends Component {
  constructor() {
    super();
    this.state = {
      beersList: []
    };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(response => {
        console.log("Beers", response.data);
        this.setState({
          beersList: response.data
        });
      })
      .catch(err => {
        alert("Something went wrong");
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return (
      <div className="AllBeers">
        <NavBar />
        <ul>
          {this.state.beersList.map(oneBeer => {
            return (
              <div className="AllBeers-container">
                <li key={oneBeer._id}>
                  <img src={oneBeer.image_url} alt={oneBeer.name} />
                  <Link to={`/beers/${oneBeer._id}`}>
                    <h3>{oneBeer.name}</h3>
                  </Link>
                  <h5>{oneBeer.tagline}</h5>
                  <p>Created by : {oneBeer.contributed_by}</p>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllBeers;
