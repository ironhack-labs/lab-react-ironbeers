import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <Card className="beer-card">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle >By: {contributed_by}</Card.Subtitle>
                <Card.Text>{tagline}</Card.Text>
                <Link to={`/beers/${_id}`} className="btn btn-dark btn-sm btn-block" >See details</Link>
            </Card.Body>
        </Card>
    )
}

export default BeerCard 