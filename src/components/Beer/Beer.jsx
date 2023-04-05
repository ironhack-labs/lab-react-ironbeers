import React from 'react'

function Beer({ beer }) {
  return (
    <div className="card  m-3 border-0 border-bottom border-3 w-100">
      <div className="row g-0 m-3">
        <div className="col-md-4">
          <img src={beer.image_url} className="img-fluid rounded-start" alt="BeerPicture" style={{ width: 100 }} />
        </div>
        <div className="col-md-8 d-flex align-items-center ">
          <div className="card-body">
            <h1 className="card-title mb-5">{beer.name}</h1>
            <h3 className="card-text text-secondary">{beer.tagline}</h3>
            <p className="card-text"><small className="">Created By: {beer.name}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Beer

