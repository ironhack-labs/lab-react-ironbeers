import { Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './beerList.css'

const beerCard = ({ name, imageurl, _id }) => {
    return (
        <Col md={{span:4, offset:0}} sm={{ span: 8, offset: 2 }}>
            <Card className="beer-card">
                <Card.Img variant="top" src={imageurl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default beerCard