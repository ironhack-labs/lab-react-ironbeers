import React, { Component } from "react";
import "./RandomBeers.css";
import NavBar from "./NavBar";
import Service from "../service/Service";

export default class RamdonBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Service = new Service();
    this.getBeers();
  }

  getBeers = () => {
    this.Service.getBeers()
      .then(beers => {
        const randomBeer = beers[Math.floor(Math.random() * beers.length)];
        this.setState(randomBeer);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="random-beer">
          <div>
            <img src={this.state.image_url} alt="beer" />
          </div>

          <div className="random-text">
            <div>
              <div className="random-name">{this.state.name}</div>
              <div className="random-level">{this.state.attenuation_level}</div>
            </div>

            <div>
              <div className="random-tag">{this.state.tagline}</div>
              <div className="random-brewed">{this.state.first_brewed}</div>
            </div>

            <div>
              {this.state.description}
              {this.state.contributed_by}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
