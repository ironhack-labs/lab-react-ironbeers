import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import allBeers from '../assets/beers.png'
import randomBeer from '../assets/random-beer.png'
import newBeer from '../assets/new-beer.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>

            <Container>
                <Row>
                    <Col>
                        <h1 style={{ margin: '2rem 0', fontSize: '45px' }}>Welcome to IronBeers</h1>
                    </Col>
                </Row>
                <Row>
                    <Card style={{ margin: '1rem 0' }}>
                        <Card.Img src={allBeers} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }}>All Beers</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link to="/beers"><Button variant='btn btn-outline-dark' style={{ padding: '0.3rem 2.5rem' }}>Go</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ margin: '1rem 0' }}>
                        <Card.Img src={randomBeer} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }}>Random Beer</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link to="/random-beer"><Button variant='btn btn-outline-dark' style={{ padding: '0.3rem 2.5rem' }}>Go</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ margin: '1rem 0' }}>
                        <Card.Img src={newBeer} />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }}>New Beer</Card.Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <Link to="/new-beer"><Button variant='btn btn-outline-dark' style={{ padding: '0.3rem 2.5rem' }}>Go</Button></Link>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>

        </>
    )
}

export default Home; 