import { Col, Row, Card } from 'react-bootstrap'
import './Beer-card.css'
import { NavLink } from 'react-router-dom'

export default ({ name, image_url, tagline, _id }) => {
    return (

        <Col md={6} xl={4}>
            <Card style={{ margin: '10px' }}>
                <Row>
                    <Col xs={4} >
                        <NavLink to={`/details/${_id}`}>
                            <Card.Img className='card-img' src={image_url} alt={name} />
                        </NavLink>
                    </Col>
                    <Col xs={8}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{tagline}</Card.Text>
                        <Card.Text><span>Created by: </span>{name}</Card.Text>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}