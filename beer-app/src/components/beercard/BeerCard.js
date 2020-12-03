import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerCard = ({ name, image_url, _id, tagline, contributed_by }) => {
    return (
        <Col lg={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{tagline}</p>
                    <p>Created by: {contributed_by}</p>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/beers/${_id}`}>See more</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard