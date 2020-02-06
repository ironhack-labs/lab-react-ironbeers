import React from 'react'
import { Link } from 'react-router-dom'

const Beer = ({ image_url, name, tagline, contributed_by, _id, description, detail }) => (
  <div className="Beer card mb-3">
    <Link to={`/beers/${_id}`}>
      <div className="row no-gutters">
        <div className="col-md-1 text-center p-3">
          <img src={image_url} className="card-img" alt="beer"/>
        </div>

        <div className="col-md-11">
          <div className="card-body">
            <h5 className="card-title">{ name }</h5>
            <p className="card-text">{ tagline }</p>
            <p className="card-text"><small className="text-muted"><strong>Created by:</strong> { contributed_by }</small></p>
            
            {detail && <p>{description}</p>}
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Beer