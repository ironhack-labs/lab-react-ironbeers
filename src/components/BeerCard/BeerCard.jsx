import { Card } from 'react-bootstrap'
import './BeerCard.css'
import { Link } from 'react-router-dom'

function BeerCard({ name, image_url, tagline, contributed_by, _id }) {

    return (
        <Link to={`/beers/${_id}`} className="beer-card-link">
            <Card className="d-flex flex-row mb-4 BeerCard">
                <Card.Img variant="top" src={image_url} className="beer-card-img" />
                <Card.Body className='card-body'>
                    <Card.Title className="beer-title">{name}</Card.Title>
                    <p className="tagline">{tagline}</p>
                    <p className="contributed-by">Created by: {contributed_by.split('<')[0]}</p>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BeerCard