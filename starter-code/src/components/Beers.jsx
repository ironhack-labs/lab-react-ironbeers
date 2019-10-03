import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/all").then(res => {
      console.log(res.data);
      this.setState({
        beers: res.data
      });
    });
  }
  render() {
    if (!this.state.beers) return <></>;
    return (
      <div>
        <Link to="/">
          <img src="" alt="" />
        </Link>
        <div>
          {this.state.beers.map((beer, i) => {
            return (
              <div className="beer" key={i}>
                <img src={beer.image_url} alt="beerimage" className="beerImg" />
                <div>
                  <Link to={`/beers/${i}`}>
                    <h1>{beer.name}</h1>
                  </Link>

                  <h3>{beer.tagline}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
