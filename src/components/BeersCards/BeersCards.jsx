import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import imageone from "./../../assets/beers.png"
import imagetwo from "./../../assets/new-beer.png"
import imagethree from "./../../assets/random-beer.png"
import { Link } from 'react-router-dom';


const BeersCards = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Link to={'/Beers'}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imageone} />
                                <Card.Body className='body'>
                                    <Card.Title>All Beers</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to={'/RandomBeer'}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imagetwo} />
                                <Card.Body>
                                    <Card.Title>Random Beer</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                        <Link to={'/'}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={imagethree} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BeersCards