import React from 'react';

const BeerCard = props => {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={props.image_url} className="card-img" style={{maxWidth: "150px"}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.tagline}</p>
            <p className="card-text"><small className="text-muted"><strong>Created By:</strong>{props.contributed_by}</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeerCard
