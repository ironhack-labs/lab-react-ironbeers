import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBeers = (props) => {
  console.log(props)
  return (
    <div className="cardImage">
      <div className="imageCont">
        <Link to={`/beers/${props._id}`}>
          <img className="beerImage" src={props.image_url} alt="" />
        </Link>
      </div>
      <div className="infoBeer">
        <p>{props.name}</p>
        <p>{props.tagline}</p>
        <p>
          <strong>Created by:</strong> {props.contributed_by}
        </p>
      </div>
    </div>
  )
}

export default DisplayBeers
