import React from 'react'
import {Link} from 'react-router-dom'


const beerCard = (props) => {


  return (
    <Link to={`/beer/${props.beer._id}`}>
    <div className="beerCard">
      <div className="row">
        <div className='col-3'>
          <img src={props.beer.image_url} alt="cerves"></img>
        </div>
        <div className="col-9">
          <h5>{props.beer.tagline}</h5>
          <p>{props.beer.contributed_by}</p>
        </div>
      </div>
    </div>
    </Link>
)
}

export default beerCard