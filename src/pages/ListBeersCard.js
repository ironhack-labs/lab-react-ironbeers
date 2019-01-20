import React from "react";
import { Link } from "react-router-dom";

export const ListBeersCard = ({ beer }) => {
  return (
    <div className="column">
      <Link to={`/beer/${beer._id}`}>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-32x32">
                <img src={beer.image_url} alt="beer" />
              </figure>
            </div>
            <div className="content">
              <p>
                <strong>{beer.name}</strong>
              </p>
              <p>{beer.tagline}</p>
              <p>
                <strong>Created by: </strong> {beer.contributed_by}
              </p>
            </div>
          </article>
        </div>
      </Link>
    </div>
  );
};
