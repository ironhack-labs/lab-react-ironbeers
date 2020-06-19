import React from 'react';

import { Link } from 'react-router-dom';

export default function ListBeers(props) {
  let cardStyle = {
    width: '200px',
    margin: '25px',
    boxShadow: '5px 4px 10px #a6a6a6',
  };

  return (
    <div>
      <input type="text" onChange={props.onFilter} />
      {props.beers.map((beer, index) => {
        return (
          <Link key={index} to={`/beers/${beer._id}`}>
            <div className="card" style={cardStyle}>
              <img src={beer.image_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{beer.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{beer.tagline}</h6>
                <p className="card-text">{beer.contributed_by}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
