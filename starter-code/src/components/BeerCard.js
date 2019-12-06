import React from 'react'
import {Link} from 'react-router-dom'

const BeerCard = ({_id,name,tagline,image_url}) => {
    return (
        <div className="col-sm-4">
            <div className="row">
            <Link to={`/all-beers/${_id}`}>
                <div className="col-3">
                    <img src={image_url} alt="imagen"/>
                </div>
                <div className="col-7">
                    <h2>{name}</h2>
                    <h3>{tagline}</h3>
                    <aside>Create by {name}</aside>
                </div>
            </Link>
            </div>
            <hr/>
        </div>
    )
}
export default BeerCard