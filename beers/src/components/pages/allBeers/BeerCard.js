import React from 'react'
import { Link } from 'react-router-dom'



export default ({ _id, name,tagline, image_url, contributed_by }) => {

    return (
        <Link to = {`/singleBeer/${_id}`}>
           <div className="card d-flex">
                <img className= "beerListImg" src={image_url} alt=""/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{tagline}</p>
                    <small>{contributed_by}</small>
                </div>
            </div>
        </Link>
    )
}