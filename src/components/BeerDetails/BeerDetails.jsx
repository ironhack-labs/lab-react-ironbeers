import { Card, Col, Row } from "react-bootstrap"
import './BeerDetails.css'

const BeerDetails = ({ image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by }) => {
    return (
        <Card className="CardDetails">
            <Row className="align-items-center">
                <Col>
                    <Card.Img variant="top" src={image_url} />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{tagline}</Card.Text>
                        <Card.Text>Contributed by: {contributed_by}</Card.Text>
                        <Card.Text>First brewed: {first_brewed}</Card.Text>
                        <Card.Text>Attenuation: {attenuation_level}</Card.Text>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default BeerDetails


