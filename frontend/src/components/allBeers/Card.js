import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({
  name,
  image_url,
  contributed_by,
  tagline,
  _id
}) {
  return (
    <Link to={`/beers/${_id}`}>
      <div className="main">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={image_url} alt={name} width="50px" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{name}</p>
                <p className="subtitle is-6">{tagline}</p>
              </div>
            </div>

            <div className="content">Created by: {contributed_by}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
