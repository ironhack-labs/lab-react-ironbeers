import React, { Component } from "react";
import Service from "../service/Beers.service";
import { Link } from "react-router-dom";

class BeerDetails extends Component {
  constructor(props) {
    super(props);
    this._service = new Service();
    this.state = {
      beer: {}
    };
  }

  componentDidMount = () => this.updateBeer();

  updateBeer = () => {
    this._service.getRandom()
      .then(TheBeerFromDB => this.setState({ beer: TheBeerFromDB.data }))
      .catch(err => console.log("Error", err));
  };

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
        </div>
        <h1>Random Beer</h1>
        <div>
          <img src={this.state.beer.image_url} alt={this.state.beer.name} />
          <h3>{this.state.beer.name}</h3>
          <h5>{this.state.beer.tagline}</h5>
          <h4>{this.state.beer.first_brewed}</h4>
          <h5>{this.state.beer.attenuation_level}</h5>
          <p>{this.state.beer.description}</p>
          <p>
            Created by: <small>{this.state.beer.contributed_by}</small>
          </p>
          <Link to={"/"}>Go Back</Link>
        </div>
      </div>
    );
  }
}
export default BeerDetails;
