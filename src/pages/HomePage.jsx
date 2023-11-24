import { Button, Card, Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from './../assets/beers.png'
import newBeers from './../assets/new-beer.png'
import randomBeers from './../assets/random-beer.png'


const HomePage = () => {

    return (
        <Container>
            <Row className="justify-content-end">
                <Col md={4} className="ml-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={beers} />
                        <Card.Body>
                            <Card.Title>Beers</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Link to='/beers' variant="primary" className="btn btn-dark">Go Beers</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="ml-auto">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={newBeers} />
                        <Card.Body>
                            <Card.Title>newBeers</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Link to='/new-beer' variant="primary" className="btn btn-primary">Go newBeers</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="ml-auto" >
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={randomBeers} />
                        <Card.Body>
                            <Card.Title>randomBeers</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Link to='/random-beer' variant="primary" className="btn btn-primary">Go randomBeers</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage
