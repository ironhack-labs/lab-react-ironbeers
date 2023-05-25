import { Link } from "react-router-dom";
import './HomeMenu.css'
import beers from './../../assets/beers.png'
import newBeer from './../../assets/new-beer.png'
import random from './../../assets/random-beer.png'
import { Card, Col, Container } from 'react-bootstrap'

const HomeMenu = () => {
    return (
        <div className="beerCard">
            <Container>
                <Col md={{ span: 7 }}>
                    <Card className="mb-3 mt-10">
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/beers`}>
                                    <img className="beerImg" src={beers} alt="Beers" />
                                    <h1>All Beers</h1>
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                <h2>Todas nuestras cervezas</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3 mt-10 ">
                        <Card.Body>
                            <Card.Title>
                                < Link to={`/random-beer`}>
                                    <img className="beerImg" src={newBeer} alt="newBeer" />
                                    <h1>Random Beer</h1>
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                <h2>Surprise!</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mb-3 mt-10 ">
                        <Card.Body>
                            <Card.Title>
                                <Link to={`/new-beer`}>
                                    <img className="beerImg" src={random} alt="random" />
                                    <h1>New Beer</h1>
                                </Link>
                            </Card.Title>
                            <Card.Text>
                                <h2>Create your own Beer</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div >

    )
}

export default HomeMenu