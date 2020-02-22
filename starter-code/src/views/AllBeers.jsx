import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

export default class AllBeers extends Component {
  state = {
    beers: [],
    API: "https://ih-beers-api2.herokuapp.com/beers"
  };

  componentDidMount() {
    axios
      .get(this.state.API)
      .then(apiRes => {
        console.log(apiRes);
        this.setState({ beers: apiRes.data });
      })
      .catch(apiErr => console.log("ERROR ! ", apiErr));
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.beers.map((b, i) => (
          <Link to={`/beer/${b._id}`}>
            <div key={i} className="beer">
              <div className="beer-image">
                <img src={b.image_url} alt="" />
              </div>
              <div className="beer-infos">
                <div className="beer-title">{b.name}</div>
                <div className="grey">{b.tagline}</div>
                <div className="beer-contributor">{b.contributed_by}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
