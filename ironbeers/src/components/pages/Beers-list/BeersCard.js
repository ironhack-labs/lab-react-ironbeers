import './BeersCard.css'

import { Col, Card } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const BeerCard = ({ _id, image_url, name, tagline, contributed_by }) => {
    return (

        <Col md={4}>
            
                <Card className="beer-card">
                <Link to={`/beers/${_id}`}> <Card.Img variant="top" src={image_url} alt={`Descriptive picture of ${name}`} /></Link>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{tagline}</Card.Text>
                        <Card.Text>Contributed by: {contributed_by}</Card.Text>
                    </Card.Body>
                </Card>
            
        </Col>

    )
}

export default BeerCard