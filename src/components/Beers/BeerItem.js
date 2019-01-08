import React from 'react';
import { Link } from 'react-router-dom';

const BeerItem = ({id, img, name, tag, author}) => (
    <Link className="beer-item" to={`/beers/${id}`}>
      <div className="tile">
        <div className="tile-img">
          <img src={img} alt={name} />
        </div>
        <div className="tile-body">
          <h3>{name}</h3>
          <p className="tag">{tag}</p>
          <p><b>Created by:</b> {author}</p>
        </div>
      </div>
    </Link>
);

export default BeerItem;