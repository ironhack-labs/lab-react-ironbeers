import React, { Component } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: null };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        console.log(responseFromApi);
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    return this.state.listOfBeers ? (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          {this.state.listOfBeers.map((beer, index) => {
            return (
              <div key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                  <h3>{beer.name}</h3>
                </Link>
                <p>{beer.tagline} </p>
                <img src={`${beer.image_url}`} style ={{width: "10%"}} alt=""/>
                <h5>{`${beer.contributed_by}`}</h5>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          {/* <AddProject getData={() => this.getAllProjects()}/> */}
        </div>
      </div>
    ) : (
      <p>Thinking in React while you're waiting...</p>
    );
  }
}
