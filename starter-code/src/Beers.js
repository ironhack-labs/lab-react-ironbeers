//https://ih-beers-api2.herokuapp.com/beers

import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Beers extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(response => {
        console.log(response);
        this.setState({
          beers: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.beers);
    
    return (
      <div class="card mb-3" style={{maxWidth: "540px"}}>
        {this.state.beers.map(beer => {
          return (
            <Link to={`/beers/${beer._id}`} className="row no-gutters" key={beer._id}>
              <div className="col-md-4">
                <img src={beer.image_url} style={{height:"8rem", width:"auto"}} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{beer.name}</h5>
                  <p className="card-text">
                    {beer.tagline}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Created by: {beer.contributed_by}</small>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Beers;
