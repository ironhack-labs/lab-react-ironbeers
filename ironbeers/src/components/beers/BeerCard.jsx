import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({id, title, imageURL, description, contributed_by}) => {
  return (
    <div className="card" style={{margin:5}}>
      <div className="row ">
          <div className="col-md-4">
            <Link to={`/single/${id}`}>
              <img src={imageURL} style={{maxHeight:"200px"}} alt="beer pic"/>
            </Link>
          </div>
          <div className="col-md-8">
            <div className="card-block">
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{description}</p>
              <p className="card-text"><strong>Created by</strong>: {contributed_by}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BeerCard
