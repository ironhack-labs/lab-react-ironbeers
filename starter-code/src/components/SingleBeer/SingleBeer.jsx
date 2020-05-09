import React, { Component } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import "./SingleBeer.css";

class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { singleBeer: null };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/" + id)
      .then((apiResponse) => {
        console.log(apiResponse);
        this.setState({ singleBeer: apiResponse.data });
      })
      .catch((err) => {});
  }
  render() {
    if (!this.state.singleBeer) return null;

    return (
      <React.Fragment>
        <NavBar />
        <div className="single-beer-page">
          <figure className="single-beer-image-container">
            <img
              className="single-beer-image"
              src={this.state.singleBeer.image_url}
              alt={this.state.singleBeer.name}
            />
          </figure>
          <article className="single-beer-informations">
            <h2 className="single-beer-name">{this.state.singleBeer.name}</h2>
            <h3 className="single-beer-tagline">
              {this.state.singleBeer.tagline}
            </h3>
            <p className="single-beer-description">
              {this.state.singleBeer.description}
            </p>
            <p>
              <strong>Attenuation level: </strong>
              {this.state.singleBeer.attenuation_level}
            </p>{" "}
            <p>
              <strong>First brewed in: </strong>
              {this.state.singleBeer.first_brewed}
            </p>
            <p>
              <strong>Contributed by: </strong>
              {this.state.singleBeer.contributed_by}
            </p>
          </article>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleBeer;
