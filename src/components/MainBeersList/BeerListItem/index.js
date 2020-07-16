import React from "react"
import "./BeerListItem.css"
import Col from 'react-bootstrap/Col'

import {Link} from "react-router-dom"

const BeerListItem = ({name, image_url, tagline, contributed_by, _id}) => {
    return (
        <>
        <Col as="article" className="list-item" xs="5" >
                <img src={image_url} alt={name} />
        </Col>
            <Col xs="7" className="list-item">    
            <div>
                <Link to={`/${_id}`}><h5>{name}</h5></Link>
                <p>{tagline}</p>
                <small>Created by {contributed_by}</small>
            </div>
        </Col>
        </>
    )
}

export default BeerListItem