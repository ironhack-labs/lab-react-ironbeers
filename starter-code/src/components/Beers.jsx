import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { list } from "./../services/beers-api";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor() {
    super();
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
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <h1>ALL BEERS</h1>
          {this.state.beersList.slice(20, 50).map(beer => (
        <ul>
            <img src={beer.image_url} alt="beer" width="30px" />
            <Link to={`/beer/${beer._id}`}><li>{beer.name}</li></Link>
            <li>{beer.tagline}</li>
            <li>{beer.contributed_by}</li>


        </ul>
          ))}
      </div>
    );
  }
}
