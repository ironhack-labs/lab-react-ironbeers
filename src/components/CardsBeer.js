import React from 'react'

export default function CardsBeer({_id, image_url, name, tagline, contributed_by}) {
  return (
    <div key={_id}>
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image_url} alt="Placeholder image" width="50" height="50"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
      </div>
      <div className="media-content">
        <p className="title is-4">{name}</p>
      </div>
    </div>
    <div className="content">
    {tagline}
      <br/>
    </div>
  </div>
</div>
    </div>
  )
}
   


