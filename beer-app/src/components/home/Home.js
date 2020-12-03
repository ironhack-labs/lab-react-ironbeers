import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <main>
            <Container>
                <h1>React ironbeers</h1>
                <Row >
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1552668093-24771b985482" />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
                                <Link to='/beers' className="btn btn-dark">All beers</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1589711428920-bf084b80e0bd" />
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
                                <Link to='/random-beer' className="btn btn-dark">Random beer</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1522057306606-8d84daa75e87" />
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Card.Text>
                                <Link to='/new-beer' className="btn btn-dark">New beer</Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main >
    )
}
export default Home