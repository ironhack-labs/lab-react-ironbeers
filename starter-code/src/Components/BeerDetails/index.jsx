import { singleBeer } from "./../../Services/single-beer";

import React, { Component } from "react";

export class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  async componentDidMount() {
    try {
      const beer = await singleBeer(this.props.match.params.id);
      // console.log(beer);
      this.setState({
        beer
      });
    } catch (error) {
      throw error;
    }
  }

  render() {
    const beer = this.state.beer;
    return (
      <div>
        {beer.length !== 0 && (
          <div className="card" style={{ width: "18rem" }}>
            <img src={beer.image_url} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">{beer.name}</h5>
              <p className="card-text">{beer.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Created By: {beer.contributed_by}
              </li>
              <li className="list-group-item">{beer.tagline}</li>
              <li className="list-group-item">{beer.attenuation_level}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default BeerDetails;
