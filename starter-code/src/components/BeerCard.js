import React from "react";
import {Link} from "react-router-dom";
import "./BeerCard.css";

export default function BeerCard({_id, image_url, name, tagline, contributed_by}) {
  return (
    <div>
      <Link to={`/beers/${_id}`} className="beerCardMainDiv">
        <div className="beerCardPhotoDiv">
          <img className="beerCardPhoto" src={image_url} />
        </div>
        <div>
          <div className="beerCardName">{name}</div>
          <div className="beerCardTagline">{tagline}</div>
          <div className="beerCardContributedBy">
            Created by: {contributed_by}
          </div>
        </div>
      </Link>
    </div>
  );
}
