import React from 'react'
import { Link } from 'react-router-dom'

function MainCard({ image, title, text, to}) {
  return (
    <div>
      <Link to={to} className="text-decoration-none">
        <div className="card">
          <img src={image} className="card-img-top" alt="beers" />
          <div className="card-body text-dark">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MainCard