import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from 'react-router-dom'

export default function ListCard(
  image,
  name,
  tagline,
  id,
  contributed_by
){
  return (
    <Link to={`/beers/${id}`}>
      <div style={{display:'flex', flexDirection: 'row'}}>
        <div>
          <img style={{height: '100px'}} src={image} alt="beer"/>
        </div>
        <div>
          <h5>{name}</h5>
          <h6 className='text-muted'>{tagline}</h6>
          <small>Created by: {contributed_by}</small>
        </div>
      </div>
    </Link>
  )
}