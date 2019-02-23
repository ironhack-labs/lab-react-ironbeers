import React from "react";
import { Link } from "react-router-dom";

const beerCard = props => {
  return (
    <div className="Beer-Card" key={props.theBeer._id}>
      <div className="Beer-Image-Box">
        <Link to={`/beers/${props.theBeer._id}`}>
          <img className="Beer-Image" src={props.theBeer.image_url} />
        </Link>
      </div>

      <div className="Beer-Container">
        <h2>{props.theBeer.name}</h2>
        <p>{props.theBeer.tagline}</p>
        {/* <p>{props.theBeer.description}</p> */}
      </div>
    </div>
  );
};

export default beerCard;
