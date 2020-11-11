import React from 'react';
import { Link } from 'react-router-dom';
import './BeerCard.css';

export default function BeerCard({ name, tagline, author, idKey, image }) {
  return (
    <Link to={`/beers/${idKey}`}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left custom-media-left">
              <figure className="image">
                <img style={{ width: 50 }} src={image} alt={name} />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-5">Created By: {author}</p>
              <p className="subtitle is-6">{tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
