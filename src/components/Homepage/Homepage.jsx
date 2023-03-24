import { Link } from "react-router-dom"
import { Container, Row, Col, Card } from 'react-bootstrap'

import beerImg from '../../assets/beers.png'
import randomBeerImg from '../../assets/random-beer.png'
import newBeerImg from '../../assets/new-beer.png'


function Homepage() {
    return (
        <div className="homePage">
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Link to={'/allBeers'}>
                            <div className="allBeers mb-4">
                                <Card>
                                    <Card.Img variant="top" src={beerImg} />
                                    <Card.Body>
                                        <Card.Title>All Beers</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, saepe?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Link>
                        <Link to={'/randomBeer'}>
                            <div className="randomBeer mb-4">
                                <Card>
                                    <Card.Img variant="top" src={randomBeerImg} />
                                    <Card.Body>
                                        <Card.Title>Random Beer</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, saepe?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Link>
                        <Link to={'/newBeer'}>
                            <div className="newBeer mb-4">
                                <Card>
                                    <Card.Img variant="top" src={newBeerImg} />
                                    <Card.Body>
                                        <Card.Title>New Beer</Card.Title>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, saepe?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}


export default Homepage