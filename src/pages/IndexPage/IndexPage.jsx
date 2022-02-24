import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'react-bootstrap'
import beers from '../../assets/beers.png'
import randomBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'

function HomePage() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Link to="/beers">
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={beers} />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} md={4}>
                    <Link to="/random-beer">
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={randomBeer} />
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} md={4}>
                    <Link to="/new-beer">
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={newBeer} />
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage