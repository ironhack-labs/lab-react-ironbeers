import React, { Component } from "react";
import NavBar from "./Navbar";
import { list } from "../services/beers-api";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beersList: []
    };
  }
  componentDidMount() {
    list()
      .then(beersList => {
        this.setState({
          beersList
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>All Beers</h1>

        {this.state.beersList.slice(0, 30).map(beers => (
          <ul>
            <li>{beers.name} </li>
            <Link to={`/beer/${beers._id}`} key={beers.id}>
              See Details
            </Link>
            <li>{beers.tagline} </li>
            <img src={beers.image_url} alt={beers.name} height="40px" />
            <li>{beers.contributed_by} </li>
          </ul>
        ))}
      </div>
    );
  }
}
