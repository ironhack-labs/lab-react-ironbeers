import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
    this.getBeers = this.getBeers.bind(this);
  }
  getBeers() {
    Axios.get("https://ih-beers-api.herokuapp.com/beers")
      .then(result => {
        this.setState({ beers: result.data });
      })
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.getBeers();
  }
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <br />
        {this.state.beers.length !== 0
          ? this.state.beers.map(beer => (
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <div>
                  <img src={beer.image_url} />
                  <h2>{beer.name}</h2>
                  <h3>{beer.tagline}</h3>
                  <p>{beer.contributed_by}</p>
                  <hr />
                </div>
              </Link>
            ))
          : null}
      </div>
    );
  }
}
