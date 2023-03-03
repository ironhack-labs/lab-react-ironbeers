import './HomePage.css'
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from './../../assets/beers.png'
import RandBeer from './../../assets/random-beer.png'
import NewBeer from './../../assets/new-beer.png'



const HomePage = () => {
    return (
        <Container className="Home mt-5">

            <Row>

                <Col md={{ span: 10, offset: 1 }}>

                    <Link to="/beers">
                        <Card className='mb-3 BeerCard'>
                            <Card.Img variant="top" src={beers} />
                            <Card.Body>
                                <Card.Title>All Beers</Card.Title>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Quas nemo maxime reprehenderitdolorem quis rem
                                    odit quod. Temporibus, repudiandaemagni commodi praesentium
                                    pariatur corrupti, nihil amet explicabo ipsum laudantium nostrum.</p>
                            </Card.Body>
                        </Card>
                    </Link>

                </Col>

                <Col md={{ span: 10, offset: 1 }}>

                    <Link to="/random-beer">
                        <Card className='mb-3 BeerCard'>
                            <Card.Img variant="top" src={RandBeer} />
                            <Card.Body>
                                <Card.Text>Random Beer</Card.Text>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Quas nemo maxime reprehenderitdolorem quis rem
                                    odit quod. Temporibus, repudiandaemagni commodi praesentium
                                    pariatur corrupti, nihil amet explicabo ipsum laudantium nostrum.</p>
                            </Card.Body>
                        </Card>
                    </Link>

                </Col>

                <Col md={{ span: 10, offset: 1 }}>

                    <Link to="/new-beer">
                        <Card className='mb-3 BeerCard'>
                            <Card.Img variant="top" src={NewBeer} />
                            <Card.Body>
                                <Card.Text>New Beer</Card.Text>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing
                                    elit. Quas nemo maxime reprehenderitdolorem quis rem
                                    odit quod. Temporibus, repudiandaemagni commodi praesentium
                                    pariatur corrupti, nihil amet explicabo ipsum laudantium nostrum.</p>
                            </Card.Body>
                        </Card>
                    </Link>

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage