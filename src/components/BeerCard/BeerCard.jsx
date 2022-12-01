import './BeerCard.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
function BeerCard({ _id, image_url, name, tagline, contributed_by }) {
    return (
        <Card className="mb-4 CoasterCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h4> {tagline}</h4>
                    <h6> Created by:{contributed_by}</h6>

                </Card.Text>
                <Link to={`/beers/${_id}`}>
                    <div className="d-grid">
                        <Button variant="dark" size="sm">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default BeerCard;