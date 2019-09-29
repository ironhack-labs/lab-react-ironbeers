import React, { Component } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
export default class ListBeers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers").then(res => {
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
          <img
            src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
            alt="Homelink"
          />
        </Link>
        <div>
          {this.state.beers.slice(0, 10).map((beer, i) => {
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
