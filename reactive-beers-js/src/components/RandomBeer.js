import React, { Component } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        console.log("coucou", responseFromApi);
        this.setState(responseFromApi.data[0]);
      });
  };

  componentDidMount() {
    this.getRandomBeer();
  }
  render() {
    return (
      <div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image is-4by3">
              <figure className="image ">
                <img src={this.state.image_url} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">{this.state.name}</p>
                  <p className="subtitle is-6">{this.state.tagline}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beers;
