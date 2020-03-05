import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AllBeers extends Component {
  state = {
    beerList: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        console.log(response.data);
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
            <div className="beer-item" key={beer._id}>
              <div>
                <img className="beer-image" src={beer.image_url} alt="" />
              </div>
              <div className="beer-info">
                <h4>{beer.name}</h4>
                <h5>{beer.tagline}</h5>
                <p>
                  <strong>Created by: </strong>
                  {beer.contributed_by}
                </p>
                <p>
                  <Link to={`/beers/${beer._id}`}>Details</Link>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllBeers;
