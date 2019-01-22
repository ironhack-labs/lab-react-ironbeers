import React from "react";
import { Link } from "react-router-dom";

export const ListBeersCard = ({ beer }) => {
  return (
    <div className="column">
     
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
              <Link to={`/beer/${beer._id}`}>
              <button className="button is-warning"><span><i className="far fa-eye"></i></span>See More</button>
              </Link>
            </div>
          </article>
        </div>
     
    </div>
  );
};
