import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './BeerCard.css'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        <Link to={`/beers/${_id}`}>
            <Card style={{ width: '18rem' }} className='BeerCard'>
                <Row className="align-items-center">
                    <Col>
                        <Card.Img variant="top" src={image_url} />
                    </Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{tagline}</Card.Text>
                            <Card.Text>{contributed_by}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Link>
    )
}

export default BeerCard