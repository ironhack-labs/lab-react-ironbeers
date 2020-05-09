import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import "../SingleBeer/SingleBeer.css";
import axios from "axios";

class RandomBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { randomBeer: null };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((apiResponse) => {
        this.setState({ randomBeer: apiResponse.data });
      })
      .catch((err) => {});
  }

  render() {
    if (!this.state.randomBeer) return null;
    return (
      <div>
        <React.Fragment>
          <NavBar />
          <div className="single-beer-page">
            <figure className="single-beer-image-container">
              <img
                className="single-beer-image"
                src={this.state.randomBeer.image_url}
                alt={this.state.randomBeer.name}
              />
            </figure>
            <article className="single-beer-informations">
              <h2 className="single-beer-name">{this.state.randomBeer.name}</h2>
              <h3 className="single-beer-tagline">
                {this.state.randomBeer.tagline}
              </h3>
              <p className="single-beer-description">
                {this.state.randomBeer.description}
              </p>
              <p>
                <strong>Attenuation level: </strong>
                {this.state.randomBeer.attenuation_level}
              </p>
              <p>
                <strong>First brewed in: </strong>
                {this.state.randomBeer.first_brewed}
              </p>
              <p>
                <strong>Contributed by: </strong>
                {this.state.randomBeer.contributed_by}
              </p>
            </article>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default RandomBeer;
