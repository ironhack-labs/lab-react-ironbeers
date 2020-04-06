import React from "react";
import "../styling/BeerDetail.css";
import axios from "axios";
import Navbar from "../components/Navbar";

export class RandomBeer extends React.Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    const selectedBeer = this.props.match.params.id;
    axios
      .get("https://ih-beers-api.herokuapp.com/beers/random")
      .then(response => {
        console.log("one beer response: ", response);
        this.setState({ beer: response.data });
        console.log(this.state.beer);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        {!this.state.beer && <h1>Loading...</h1>}
        {this.state.beer && (
          <div className="column">
            <div className=" beer-detail">
              <img src={this.state.beer.image_url} alt="Beer" />

              <div className="row">
                <h2 className="col-9 text-left">{this.state.beer.name}</h2>
                <h3 className="col-3">{this.state.beer.attenuation_level}</h3>
              </div>

              <div className="row">
                <h5 className="col-12 text-left">{this.state.beer.tagline}</h5>
                {/* <p>{this.state.beer.first_brewed}</p> */}
              </div>

              <div>
                <p className="text-left">{this.state.beer.description} </p>
                <h6 className="text-left">{this.state.beer.contributed_by}</h6>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default RandomBeer;
