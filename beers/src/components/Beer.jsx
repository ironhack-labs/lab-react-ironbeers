import React from "react";
import { Link } from "react-router-dom";

export const Beer = ({ props }) => {
  const { name,tagline, image_url, _id } = props;
  return (
    <div>
      <Link  to={`/beers/${_id}`}>
        <div className="box" >
          <article className="media" >
            <div className="media-left">
              <figure className="image is-64x64">
                <img
                  src={image_url}
                  alt={name}
                />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p >
                  <strong>{name}</strong>
                  <br />
                  {tagline}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </div>
  );
};
