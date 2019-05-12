import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ imageUrl, title, description, href }) => (
  <article className="box">
    <img src={imageUrl} alt={title} />
    <h2 className="title is-5">
      <Link to={href}>{title}</Link>
    </h2>
    <p className="subtitle is-6">{description}</p>
  </article>
);

export default Card;
