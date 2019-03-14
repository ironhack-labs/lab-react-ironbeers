import React from "react";
import { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

class BeersList extends Component {
  constructor (props) {
    super(props);
    this.state = { listOfBeers: [] };
  }
  getAllBeers = () => {
    axios.get("https://ironbeer-api.herokuapp.com/beers/all")
    .then(responseFromAPI => {
      this.setState({
        listOfBeers: responseFromAPI.data
      })
    })
  }
  componentDidMount () {
    this.getAllBeers();
  }
  render () {
    return (
      <div>
        <Navbar />
        {this.state.listOfBeers.map( beer => {
          return (
            <div key={beer._id}>
              <ul>
                <li><Link to={`/beers/${beer._id}`}>
                <img src={beer.image_url}></img>
                </Link></li>
                <li>{beer.name}</li>
                <li>{beer.tagline}</li>
                <li>{beer.contributed_by}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BeersList;