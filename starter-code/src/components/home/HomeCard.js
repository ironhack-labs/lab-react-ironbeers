import React from "react";
import { Link } from "react-router-dom";

export default function HomeCard({title, link, image}) {
  return (
    <div>
      <Link to={link}>
        <div className="card">
          <div className="card-image">
            <figure className="image">
              <img src={image} alt="beers" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a sem ligula. Suspendisse molestie pretium magna,
                  ut hendrerit nibh lobortis id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
