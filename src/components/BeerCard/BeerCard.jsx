import { Button, Card } from 'react-bootstrap'
import './BeerCard.css'

import { Link } from 'react-router-dom'

function BeerCard({ name, image_url, _id }) {

    return (
        <Card className="d-flex justify-content-center mb-4 BeerCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link className="link" to={`/beers/${_id}`}>
                    <div className="d-grid">
                        <Button variant='outline-dark' className="d-grid gap-2 col-12 mx-auto mb-3">Beer Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BeerCard