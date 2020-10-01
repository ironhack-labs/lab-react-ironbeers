import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'

import './BeerCard.css'


const BeerCard = (props) => {

    return (
        <Col sm={12} md={4} className='beerCard'>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={props.image_url} className="card-img" alt={props.name}></img>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text text-muted">{props.tagline}</p>
                        <p className="card-text"><small>Created by: {props.contributed_by}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default BeerCard