import React from 'react';
import { Link } from 'react-router-dom';
import './oneBeer.css';

function OneBeer({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <div className="beerContainer">
      <Link to={`/beers/${_id}`} key={_id}>
        <div className="containerInfo">
          <img src={image_url} alt="image" />
          <div className="containerInfoBox">
            <h1>{name}</h1>
            <p>{tagline}</p>
            <art>
              <b>Created by: </b>
              {contributed_by}
            </art>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default OneBeer;
