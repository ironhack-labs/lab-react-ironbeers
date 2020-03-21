import React from 'react';
import { Link } from 'react-router-dom';

export const BeerCard = ({ id, image, name, tagline, contributed }) => {
    return (
        <Link to={`beers/${id}`}>
            <article className="beer-card">
                <figure className="beer-card__image-wrapper">
                    <img src={image} alt="" />
                </figure>
                <div className="beer-card__content">
                    <h2 className="beer-name">{name}</h2>
                    <p className="beer-tagline">{tagline}</p>
                    <small className="beer-contributed">
                        <strong>Created by:</strong> {contributed}
                    </small>
                </div>
            </article>
        </Link>
    )
}