import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ListBeerCard = ({ image_url, name, tagline, contributed_by, id }) => {
    
    return (
    <Row>  
       <Col lg={8}>
            <Card className="beer-card">
                <Card.Img className='beer-image' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/${id}`}>Ver detalles</Link>
                    <h5>{tagline}</h5>
                    <small>{contributed_by}</small>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
}

export default ListBeerCard
