import React from "react";
import { Link } from "react-router-dom";

export default class TheBeer extends React.Component {
  render() {
    let theBeer = this.props.beers.find(
      eachBeer => eachBeer._id == this.props.match.params.thisID
    );

    return (
      <div>
        <img src={theBeer.image_url} alt={theBeer._id} />
        <h3>
          {theBeer.name}
        </h3>
        {theBeer.description}
        <Link to="/">
          <button className="btn btn-warning">Home</button>
        </Link>
      </div>
    );
  }
}
