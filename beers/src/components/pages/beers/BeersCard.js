import React from 'react'
import { Link } from 'react-router-dom'

import './BeersCard.css'


export default ({ _id, image_url, name,tagline,contributed_by }) => {

    return(

        <div className="card flex-row flex-wrap">
                <div className="card-header border-0" style={{backgroundColor:'transparent',margin:'0'}}>
                    <img src={image_url} alt="" className="beer-image"/>
                </div>
            <div className="card-block px-2">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{tagline}</p>
                <p className="card-text"><small className="text-muted">{contributed_by}</small></p>
            </div>
            <div className="w-100"></div>
        </div>

    )

}

