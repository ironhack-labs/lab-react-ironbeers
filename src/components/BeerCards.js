import React from 'react'
import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom'

const BeerCard = props => {
    return (

        <Media as="li" className="my-3">
            <Link to={`/beer/${props._id}`}> <img
                width={50}
                className="mr-3"
                src={props.image_url}
                alt={props.name}
            /> </Link>
            <Media.Body className="p-3">
                <h5>{props.name}</h5>
                <p>{props.tagline}</p>
            </Media.Body>
        </Media>




    )
}

export default BeerCard