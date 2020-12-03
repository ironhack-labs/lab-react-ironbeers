import { Col, Card, Button } from 'react-bootstrap'
import './BeersCards.css'


import { Link } from 'react-router-dom'

const BeersCard = ({ name, image_url, _id, description }) => {
    return (
        <Col lg={4}>
            <Card className="beers-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{description}</p>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/beers/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeersCard