import React from 'react'
import './BeerDetail.css'

export default function BeerDetail(props) {
  const { image, name, tagline, brewedSince, attLevel, description, author } = props
  return (
    <div className="beer-detail">
      <div className="detail-img-wrapper">
        <img src={image} alt="beer-img"/>
      </div>
      <div className="beer-detail-text">
        <div className="detail-line-1">
          <p className="detail-name">{name}</p>
          <p className="detail-attlevel">{attLevel}</p>
        </div>
        <div className="detail-line-2">
          <p className="detail-tagline">{tagline}</p>
          <p className="detail-date">{brewedSince}</p>
        </div>
        <div className="detail-line-3">
          <p className="detail-desc">{description}</p>
          <p className="detail-author">{author}</p>
        </div>
      </div>
    </div>
  )
}
