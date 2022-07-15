import { Container, Button, Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beer from "./../../assets/beers.png"
import newbeer from "./../../assets/random-beer.png"
import rndmbeer from "./../../assets/new-beer.png"

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={beer} />
                        <Card.Body>
                            <Card.Title>dsfgasfga</Card.Title>
                            <hr />
                            <Link to='/beers'>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm" as="div">ALL BEERS</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={rndmbeer} />
                        <Card.Body>
                            <Card.Title>asdgasdgasdg</Card.Title>
                            <hr />
                            <Link to='/random-beer'>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm" as="div">RANDOM</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={newbeer} />
                        <Card.Body>
                            <Card.Title>hngsdgsd</Card.Title>
                            <hr />
                            <Link to='/new-beer'>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm" as="div">New beer</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home