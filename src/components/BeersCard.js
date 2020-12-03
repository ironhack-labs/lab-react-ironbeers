import { Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'

const BeersCard = ({ name, image_url, tagline, contributed_by, _id }) => {
    return (
        <div className="containerCard">
                    <div className="cardImg">
                <img src={image_url} alt={name} className="imgBeer" style={{ width: "80px"}}/>
                    </div>
                    <div className="cardText">
                        <h3>{name}</h3>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
                        <Link to={`/beers/${_id}`}><button>Check the details</button></Link>
                    </div>

                </div>
    )
}

export default BeersCard