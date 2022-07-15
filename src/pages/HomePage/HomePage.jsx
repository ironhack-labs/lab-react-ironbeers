import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from './../../assets/beers.png'
import newBeer from './../../assets/new-beer.png'
import randomBeer from './../../assets/random-beer.png'

const HomePage = () => {

    return (
        <Container>

            <Row>

                <Col md={{ span: 4 }}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={beers} />
                        <Card.Body>
                            <Card.Title>Beer</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique numquam dolorem deserunt a temporibus nostrum et quas tenetur repellat.
                            </Card.Text>
                            <Link to="/beer">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={{ span: 4 }}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={newBeer} />
                        <Card.Body>
                            <Card.Title>New Beer</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique numquam dolorem deserunt a temporibus nostrum et quas tenetur repellat.
                            </Card.Text>
                            <Link to="/new-beer">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Col>

                <Col md={{ span: 4 }}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={randomBeer} />
                        <Card.Body>
                            <Card.Title>Random Beer</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae similique numquam dolorem deserunt a temporibus nostrum et quas tenetur repellat.
                            </Card.Text>
                            <Link to="/random-beer">
                                <Button variant="primary">Go somewhere</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Col>

            </Row>

        </Container >
    )
}

export default HomePage