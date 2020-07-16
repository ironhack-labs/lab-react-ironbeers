import React from 'react'
import {Link} from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

const BeerCard = ({_id, image_url, name, tagline, contributed_by}) => {
    return (
        <Col md={12}>
            <Card>
                <Link to={`/beers/${_id}`}><Card.Img className='beerImg' variant='top' src={image_url}/></Link>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text><b>Contributed by: </b>{contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard