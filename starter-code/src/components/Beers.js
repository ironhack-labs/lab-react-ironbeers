import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Beers extends Component {
  state = {
    beerList: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(response => {
      this.setState({
        beerList: response.data
      });
    });
  }
  render() {
    return (
      <div className="container">
        {this.state.beerList.map(beer => {
          return (
            <div key={beer._id}>
              <div className="beer-item">
                <div className="beer-image">
                  <img src={beer.image_url} alt="beer" />
                </div>
                <div className="beer-info">
                  <h3>{beer.name}</h3>
                  <h4>{beer.tagline}</h4>
                  <h5>
                    Created by: <span>{beer.contributed_by}</span>
                  </h5>
                  <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
