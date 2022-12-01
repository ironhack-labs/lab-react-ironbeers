import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import './BeerCard.css'

function BeerCard({name, tagline, image_url, _id}) {

    return (
        <Card className="mb-4 BeerCard">
            <Card.Img src={image_url} className="images" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{ tagline}</p>
                <Link to={`/beers/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm">See details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default BeerCard;