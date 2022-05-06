import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const BeerCard = ({ name, image_url, tagline, contributed_by, _id }) => {
    return (
        <Card>
            <Card.Img src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{tagline}</Card.Title>
                <Card.Title>{contributed_by}</Card.Title>
                <Link to={`/${_id}`}>
                    <Button variant="dark">Ver detalles</Button>
                </Link>

            </Card.Body>
        </Card >
    )
}

export default BeerCard