import { Card, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./BeerCard.css"

const BeerCard = ({ name, image_url, _id, tagline, contributed_by }) => {
    return (
        <Row>
            
            <Card className="BeerCard d-flex flex-row">
                <Col md={4}>

                    <Card.Img variant="top" src={image_url} />
                </Col>
                <Col md={8} className=" d-flex align-items-center">
                    <Card.Body >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{tagline}</Card.Text>
                        <Card.Text>{contributed_by}</Card.Text>

                        <Link to={`/beers/${_id}`}>
                            <div className="d-grid gap-2">
                                <Button variant="dark">Beer's details</Button>
                            </div>
                        </Link>
                    </Card.Body>
                </Col>
            </Card >
        </Row>
    )
}

export default BeerCard