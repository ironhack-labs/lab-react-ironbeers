import React from 'react'

function Beer({ beer }) {
  return (
    <div className="d-flex container my-4 align-items-center justify-content-center pb-3 border-bottom">
      <img src={beer.image_url} alt="beerImage" style={{ width: 50 }} />
      <div className="ms-5">
        <h3>{beer.name}</h3>
        <h5 className="text-secondary">{beer.tagline}</h5>
        <p>Created by: {beer.name}</p>
      </div>
    </div>
  );
}

export default Beer