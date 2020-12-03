import { Container, Row, Col } from 'react-bootstrap'
import './BeerCard.css'

import { Link } from 'react-router-dom'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (
        
        <Container>
            <Row>
                <Col sm={4}>
                    <figure>
                        <img src={image_url} />
                        </figure>
                </Col>
                <Col sm={8}>
                
                    <h3>{name}</h3>
                      <h4>Created by: {contributed_by}</h4>
                        <p>{tagline}</p>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/beer/${_id}`}>More details</Link>
                </Col>
                </Row>
            </Container>
        
    )
}

export default BeerCard