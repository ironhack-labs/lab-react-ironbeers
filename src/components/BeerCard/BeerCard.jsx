import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeerCard = ({ image_url, name, tagline, contributed_by, id }) => {
    return (
        <Card className="BeerCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
                <Link to={`/beers/:beer${id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">See Details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}
export default BeerCard