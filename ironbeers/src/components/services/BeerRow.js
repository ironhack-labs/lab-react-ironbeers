import React from 'react';
import { Link } from 'react-router-dom';


const BeerRow = (props) => {
  return (
    <Link to={`/beers/${props.name}`}>
        <div className="card card-beer-row">
            <div className="col-left">
                <img className="img-beer-row" src={props.image_url} alt="Placeholder"/>
            </div>
            <div className="col-right">

                <p className="title">{props.name}</p>
                <p className="title-2">{props.tagline}</p>
                <p className="title-3">{props.contributed_by}</p>

            </div>
        </div>
    </Link>
  )
}

export default BeerRow;