import './BeerCard.css'
import { Col, Row } from "react-bootstrap"
import Card from 'react-bootstrap/Card'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Card className="BeerCard d-flex flex-column align-items-center">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {tagline}
                </Card.Text>
                <Card.Text>
                    {contributed_by}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BeerCard