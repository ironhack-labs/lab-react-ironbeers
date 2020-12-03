import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BeerCard.css'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <Col lg={4}>
            <Card className="beer-card">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{tagline}</p>
                    <small>{contributed_by}</small>
                    <Link className="btn btn-primary btn-block btn-sm" to={`/beers/${_id}`}>See details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BeerCard