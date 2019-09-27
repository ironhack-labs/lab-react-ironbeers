import React from "react";
import { Link } from "react-router-dom";

export default function BeersCard({beerObject}) {
  return (
    <Link to={`/beer/${beerObject._id}`}>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img
                src={beerObject.image_url} alt="beer"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <h1>{beerObject.name}</h1>
              <h3 className="has-text-grey">{beerObject.tagline}</h3>
              <p><b>Created by </b>{beerObject.tagline}</p>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
}
