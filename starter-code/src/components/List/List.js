import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeHeader from "../HomeHeader/HomeHeader";

export default class List extends Component {
  showBeers = () => {
    return this.props.listOfBeers.map((eachBeer, i) => {
      return (
        <div className="container d-flex flex-row" key={i}>
          <div className="col-4">
            <img src={eachBeer.image_url} alt={eachBeer.name} height="100px" />
          </div>
          <div className="col-8">
            <Link to={"/single/" + eachBeer._id}>
              <h4 className="name">{eachBeer.name}</h4>
            </Link>
            <p className="tagline">{eachBeer.tagline}</p>
            <p className="contributor">Created by: {eachBeer.contributed_by}</p>
          </div>
        </div>
      );
    });
  };
  render() {
    // console.log(this.props.listOfBeers)
    return (
      <div>
        <HomeHeader />
        <h1>List Of Beers</h1>
        {this.showBeers()}
      </div>
    );
  }
}
