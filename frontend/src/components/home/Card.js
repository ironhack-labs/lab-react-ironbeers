import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ name, description, imageUrl, url }) {
  return (
    <Link to={url}>
      <div className="container">
        <div className="card" style={{ margin: '10px' }}>
          <div className="card-image">
            <figure className="image is-2by1">
              <img src={imageUrl} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <div className="media-content">
              <p className="title is-4">{name}</p>
              <p className="subtitle is-6">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
