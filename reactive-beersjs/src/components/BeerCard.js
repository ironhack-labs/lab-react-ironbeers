import React from "react";
import { Link } from "react-router-dom";

const beerCard = props => {
  return (
    <div className="Beer-Container" key={props.theBeer._id}>
      <div>
        <Link to={`/beers/${props.theBeer._id}`}>
          <img className="Beer-Image" src={props.theBeer.image_url} />
        </Link>
      </div>

      <div>
        <h2>{props.theBeer.name}</h2>
        <p>{props.theBeer.tagline}</p>
        {/* <p>{props.theBeer.description}</p> */}
      </div>
    </div>
  );
};

export default beerCard;
