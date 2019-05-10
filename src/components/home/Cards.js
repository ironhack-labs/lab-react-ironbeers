import React from 'react'
import {Link} from 'react-router-dom'

export default function Cards({image, title, description,url}) {
  return (
    <div key="image">
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Placeholder image" width="200" height="200"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
      </div>
      <div className="media-content">
        
        <Link to={url}>
          <p className="title is-4">{title}</p>
        </Link>
      </div>
    </div>
    <div className="content">
    {description}
      <br/>
    </div>
  </div>
</div>
    </div>
  )
}
   