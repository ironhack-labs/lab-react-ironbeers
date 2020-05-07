import React, { Component } from "react";

import axios from "axios";
import "./BeerDetails.css";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((response) => {
        this.setState({ beers: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const beer = this.state.beers;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="beer-details">
              <div className="beer-card">
                <div className="col-2">
                  <figure>
                    <img src={beer.image_url} alt={beer.name} />
                  </figure>
                </div>
                <div className="col-6">
                  <div className="sides">
                    <div className="left">
                      <h2>{beer.name}</h2>
                      <p>{beer.tagline}</p>
                    </div>
                    <div className="right">
                      <h2>{beer.attenuation_level}</h2>
                      <p>{beer.first_brewed}</p>
                    </div>
                  </div>
                  <div className="info">
                    <p>{beer.description}</p>
                    <small>{beer.contributed_by}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BeerDetails;
