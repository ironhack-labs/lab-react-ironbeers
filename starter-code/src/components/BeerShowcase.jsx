import React from 'react'
import { Link } from 'react-router-dom'

const BeerShowcase = (props) => {
  return (
    <>
    <div className='beer-showcase'>
      <div className='showcase-img'>
      <img src={props.image} alt=""/>
      </div>
      <div className='beer-desc'>
        <Link to={`/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <h3>{props.tagline}</h3>
        <p><span>Created by:</span> {props.contributed_by}</p>
      </div>
    </div>
    <hr></hr>
    </>
  )
}

export default BeerShowcase
