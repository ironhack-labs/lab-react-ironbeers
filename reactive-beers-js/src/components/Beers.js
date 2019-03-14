import React, { Component } from "react";
import axios from "axios";
import "bulma/css/bulma.css";

class Beers extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        console.log("coucou", responseFromApi);
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }
  render() {
    return (
      <div>
        {this.state.listOfBeers.map(beer => {
          return (
            <div key={beer._id} className="column is-one-third">
              <div className="card">
                <div className="card-image is-4by3">
                  <figure className="image ">
                    <img src={beer.image_url} alt="Placeholder image" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{beer.name}</p>
                      <p className="subtitle is-6">{beer.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Beers;
