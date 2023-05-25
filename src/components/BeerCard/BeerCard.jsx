import './BeerCard.css'
import { Card, Col, Container, Row } from 'react-bootstrap'


const BeerCard = ({ beer }) => {

    return (

        <Container className='mb-5'>
            <Card>
                <Row>
                    <Col>
                        <Card.Img variant="top" src={beer.image_url} style={{ width: '50%' }} />
                    </Col>

                    <Col>
                        <Card.Title className='mt-3'>{beer.name}</Card.Title>
                        <Card.Body className='mt3'>
                            <Card.Text>{beer.tagline}</Card.Text>
                            <Card.Text>{beer.contributed_by}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>

    )
}


export default BeerCard