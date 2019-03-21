import React from 'react'
import { Link } from 'react-router-dom';


export default function BeerCard(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <li><Link to={`/beers/${props._id}`}>Details</Link></li>
    </div>
  )
}
