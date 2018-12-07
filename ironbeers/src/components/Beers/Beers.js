import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = { beersList: null };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          beersList: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return this.state.beersList ? (
      <div>
        <div>
          <NavBar />
        </div>
        <div style={{ width: "100%", float: "left" }}>
          {this.state.beersList.map((Beer, index) => {
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

