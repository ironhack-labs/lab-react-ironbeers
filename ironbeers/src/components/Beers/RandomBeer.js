import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

export default class RandomBeer extends Component {
  constructor() {
    super();
    this.state = { beersRandom: null };
  }

  getRandomBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          beersRandom: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getRandomBeers();
  }

  render() {
    return this.state.beersRandom ? (
      <div>
        <div>
          <NavBar />
        </div>
        <div style={{ width: "100%", float: "left" }}>
          {this.state.beersRandom.map((Beer, index) => {
            return (
              <div key={Beer._id}>
                <Link to={`/Beers/${Beer._id}`}>
                  <h3>{Beer.name}</h3>
                </Link>
                <p style={{ maxWidth: "400px" }}>{Beer.tagline} </p>
                <h3>Created by: </h3><p>{Beer.contributed_by}</p>
                <img src={Beer.image_url} alt=""/>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

