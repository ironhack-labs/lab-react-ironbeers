import React from 'react'

const CardDetails = (props) => {

  return (

    <div className="container coaster-detail">

      <div className="row">
        <div className="col">
          <div className="card">
            <img src={props.image} alt={props.name}></img>
            <div className="card-body">
              <p>{props.name}</p>
              <p>{props.tagline}</p>
              <p>{props.first_brewed}</p>
              <p>{props.attenuation_level}</p>
              <p>{props.description}</p>
              <p>{props.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
export default CardDetails