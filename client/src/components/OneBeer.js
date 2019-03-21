import React from 'react'
import { Link } from 'react-router-dom';

const OneBeer = (props) => {
  // console.log(_id)
    return (
      
        <div className="col-3">
            <div className="card">
                  <img className="card-img-top" src={props.image_url} alt="Card cap"></img>
                  <div className="card-body">
                      <h5 className="card-title">{props.name}</h5>
                      <h5 className="card-title">{props.tagline}</h5>
                      <h5 className="card-title">Created by: {props.contributed_by}</h5>  
                      <h5><Link className="view-beer-details" to={`/beers/${props._id}`}>View Details</Link></h5>
                  </div>
              </div>
          </div>
  
    )
}

export default OneBeer