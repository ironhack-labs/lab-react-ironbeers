import React from "react";
import { Link } from "react-router-dom";

import "./Beer.css";

const Beer = ({ _id, name, image_url, tagline, contributed_by }) => {
  // Contributed_by without <blablabla>
  contributed_by = contributed_by.split("<")[0];

  return (
    <>
      <Link to={`/beers/${_id}`}>
        <div className="oneBeer">
          <div className="beer-image">
            <picture>
              <img src={image_url} alt="beer" />
            </picture>
          </div>
          <div className="beer-info">
            <h3>{name}</h3>
            <p className="tagline">{tagline}</p>
            <p className="createdby">
              {" "}
              <b>Created by:</b> {contributed_by}
            </p>
          </div>
        </div>
      </Link>

      <hr />
    </>
  );
};

export default Beer;
