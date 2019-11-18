import React from "react";
import { Link } from "react-router-dom";
import TheBeer from "./TheBeer";

export default class Beers extends React.Component {
  showEachBeer = () =>
    this.props.beers.map(each => {
      return (
        <div key={each._id}>
          <h3>
            <Link to={`/beers/${each._id}`}>
              {each.name}
            </Link>
          </h3>
          {each.tagline} <br />
          <img src={each.image_url} alt={each.name} />
          <br />
          <br />
        </div>
      );
    });
  render = () => {
    return (
      <React.Fragment>
        <div>
          {this.showEachBeer()}
        </div>
        <div>
          <Link to="/">
            <button className="btn btn-warning">Home</button>
          </Link>
        </div>
      </React.Fragment>
    );
  };
}
