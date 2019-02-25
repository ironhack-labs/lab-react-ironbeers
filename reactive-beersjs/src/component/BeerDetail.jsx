import React, { Component } from "react";
import NavBar from "./NavBar";
import Service from "../service/Service";
import "./BeerDetail.css";

export default class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.Service = new Service();
    this.getBeers();
  }

  getBeers = () => {
    this.Service.getBeers()
      .then(beers => {
        const beerDetail = beers.find(beer => {
          return beer._id === this.props.match.params._id;
        });
        console.log(beerDetail);
        this.setState(beerDetail);
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log("pepe");
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
