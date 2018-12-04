import React, { Component } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import "./AllBeers.css";

import Header from "./Header.js";

class AllBeers extends Component {

  constructor(props){
    super(props);
    this.state = {
      beersArray: [],
    }
  }

  componentDidMount(){
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
      .then(response => {
        console.log("Beers List", response.data)
        this.setState({ beersArray: response.data })
      })
      .catch(err => {
        console.log("Beers List ERROR", err);
        alert("Sorry! Something went wrong.");
      })
  }

  render(){
    const { beersArray } = this.state;
    return(
      <section className="AllBeers">
        <Header />
        <h2>All Beers</h2>
        <ul>
          {beersArray.map(oneBeer => {
            return (
              <li key={oneBeer._id} className="col-lg-3 col-md-4">
              <img src={oneBeer.image_url} alt={oneBeer.name} />
                <Link to={`/beers/${oneBeer._id}`}><h3>{oneBeer.name}</h3></Link>
                <h5>by {oneBeer.tagline}</h5>
                <p>Created by : {oneBeer.contributed_by}</p>
              </li>
            );
          })}
        </ul>
      </section>
    )
  }
}

export default AllBeers;