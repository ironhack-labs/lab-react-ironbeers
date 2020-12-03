import { Col, Card, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, tagline, contributed_by, _id}) => {
    return (
        <Col md={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>{tagline}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/beer/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard