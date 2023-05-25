import './HomePage.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import beerPic from '../../assets/beers.png';
import randomPic from '../../assets/random-beer.png';
import newBeerPic from '../../assets/new-beer.png';

const HomePage = () => {
    return (
        <Container>
            <h1 className='m-5'>IronBeers</h1>

            <Row className='mb-3'>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img src={beerPic} />
                        <Link to="/beers" className='link'>
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <Card.Text>
                                    Todas tus birras
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img src={randomPic} />
                        <Link to="/random-beer" className='link'>
                            <Card.Body>
                                <Card.Title>Random Beer</Card.Title>
                                <Card.Text>
                                    Qué cerve toca hoy?
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>

                <Col xs={12} md={4}>
                    <Card>
                        <Card.Img src={newBeerPic} />
                        <Link to="/new-beer" className='link'>
                            <Card.Body>
                                <Card.Title>New Beer</Card.Title>
                                <Card.Text>
                                    Una nueva y fresquita
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}











export default HomePage