import { Col, Card, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import './BeerCard.css'

const CoasterCard = ({ image_url, name, tagline, _id }) =>{
    return(
        <Col lg={4}>
        <Card className="beer-card">
            <Card.Img variant="top" src={image_url} id='beerCard' />
            <Card.Body>
                <Card.Title  id='cardTitle'>{name}</Card.Title>
                <p id='tagLine' >{tagline}</p>
                <Link className="btn btn-dark btn-block btn-sm" to={`/beer/${_id}`}>Ver detalles</Link>
            </Card.Body>
        </Card>
    </Col>
    )
}

export default CoasterCard