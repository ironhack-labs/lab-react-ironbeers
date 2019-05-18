import React, { Component } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AllBeers extends Component {
  state = {
    beer: [],
    search: ""
  };

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(beer => {
        console.log(beer.data);
        this.setState({
          beer: beer.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  beers = () => {
    return this.state.beer.map((beer, i) => {
      return (
        <div key={i} className="beerslice">
          <img className="beerimg" src={beer.image_url} />
          <Link to={`/beers/${beer._id}`}>
            <h3>{beer.name}</h3>
          </Link>
          <h4>{beer.tagline}</h4>
          <p>{beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
        </div>
      );
    });
  };



  handleOnChange =(e) =>{
    this.setState({
      search: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Nav />
        <form>
        <label>
        Search:
          <input type="text" name="search" onChange={this.handleOnChange} />
          </label>
        </form>
        {this.beers()}
      </div>
    );
  }
}
