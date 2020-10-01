import React from 'react'
import { Link } from 'react-router-dom'

export default ({ id,image, name, tagline, contributed_by}) => {

    return (
        <div className="col col-lg-3 ">
           <div className="card" >
                <Link to={`/${id}`}>
                    <img className="card-img-top" src={image} alt={name} />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{tagline}</p>
                    <p><strong>{contributed_by}</strong></p>
                </div>
            </div>
        </div>
    )
}