import React from 'react'
import { Link } from 'react-router-dom'


const BeerCard = (props) => {

  return (
    <div className="card">
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={props.image_url} alt={props.name}/>
        </figure>
      </div>
      <div className="media-content">
        <Link className="title is-4" to={`/beers/${props._id}`}>{props.name}</Link>
        <br/>
        <p className="subtitle is-6">{props.tagline}</p>
        <p><strong>Contributed by {props.contributed_by.split(" ")[0]}</strong></p>
      </div>
    </div>

    <div className="content">


    </div>
  </div>
</div>
  )
}

export default BeerCard