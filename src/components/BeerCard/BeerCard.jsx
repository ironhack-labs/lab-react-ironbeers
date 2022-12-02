import './BeerCard.css'
import { Col, Row, Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Card className="BeerCard d-flex  align-items-center">
            <Card.Img variant="top" src={image_url} className='p-3' />
            <Card.Body>
                <Card.Title><strong>{name}</strong></Card.Title>
                <Card.Text>
                    <strong>Description:</strong> {tagline}
                </Card.Text>
                <Card.Text>
                    <strong>Created by:</strong> {contributed_by}
                </Card.Text>
                <Link to={`/beers/${_id}`}>
                    <Button variant="outline-info">Show Details</Button>
                </Link>

            </Card.Body>
        </Card>
    )
}

export default BeerCard