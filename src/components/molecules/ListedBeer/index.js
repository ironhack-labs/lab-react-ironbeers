import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ListedBeer = (props) => {
  return props.beers.map((element) => {
    return (
      <div key={element._id} className="beer-container">
        <div className="beer-image-container">
          <img src={element.image_url} alt={element.name} />
        </div>
        <div className="beer-info-container">
          <Link className="beer-name" to={`/beers/${element.id}`}>
            {element.name}
          </Link>
          <p>{element.tagline}</p>
          <h4>
            Created by: <span>{element.contributed_by}</span>
          </h4>
        </div>
      </div>
    );
  });
};

export default ListedBeer;
