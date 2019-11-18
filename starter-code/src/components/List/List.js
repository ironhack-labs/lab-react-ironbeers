import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class List extends Component {
  showBeers = () => {
    return this.props.listOfBeers.map((eachBeer, i) => {
      return (
        <Link to={"/single/" + eachBeer._id} key={i}>
          <div className="col-12 d-flex flex-row">
            <div className="col-4">
              <img src={eachBeer.image_url} alt={eachBeer.name} height="100px" />
            </div>
            <div className="col-8">
              <h4>{eachBeer.name}</h4>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </div>
        </Link>
      );
    });
  };
  render() {
    // console.log(this.props.listOfBeers)
    return (
      <div>
        <h1>List Of Beers</h1>
        {this.showBeers()}
      </div>
    );
  }
}
