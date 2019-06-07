import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
  return (

    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img className="card-img-top" src={props.image_url} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.tagline}</p>
          <p className="card-text">{props.contributed_by}</p>

          <Link to={`/${props.baseUrl}/${props._id}?image=${props.image_url}&name=${props.name}&tagline=${props.tagline}&first_brewed=${props.first_brewed}&attenuation_level=${props.attenuation_level}&description=${props.description}&contributed_by=${props.contributed_by}`} className="btn btn-primary">Go somewhere</Link>

        </div>
      </div>

    </div>

  )
}
export default Card
