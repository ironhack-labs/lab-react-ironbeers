import React, { Component } from "react";
import Header from "../components/Header";
import axios from "axios";

export default class RandomBeer extends Component {
  state = {
    beer: [],
    API: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(`${this.state.API}/random`)
      .then(apiRes => {
        this.setState({ beer: apiRes.data });
        console.log(this.state.beer);
      })
      .catch(apiErr => console.log("ONEBEER ERROR ! ", apiErr));
  }

  render() {
    const b = this.state.beer;
    return (
      <div>
        <Header />
        <div className="one-beer">
          <div className="one-beer-image">
            <img src={b.image_url} alt="" />
          </div>
          <div className="one-beer-infos">
            <div className="one-beer-level">
              <h2>{b.name}</h2>
              <p className="grey">{b.attenuation_level}</p>
            </div>
            <div className="one-beer-level">
              <p className="grey">{b.tagline}</p>
              <p>{b.first_brewed}</p>
            </div>
            <div className="one-beer-level">
              <p>{b.description}</p>
            </div>
            <div className="one-beer-level">
              <p className="grey">{b.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
