import { Row, Col, Container, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import img1 from './../../assets/beers.png'
import img2 from './../../assets/new-beer.png'
import img3 from './../../assets/random-beer.png'


const HomePage = () => {


    return (
        <Container>
            <Row className="beerPage">

                <Col sm={12} md={3} className='beerCard'>
                    <Card className="homeCard">
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to='/beers'>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm" as="div">Beers list</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={3} className='beerCard'>
                    <Card className="homeCard">
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to='/random'>
                                <div className="d-grid">
                                    <Button variant="dark" size="sm" as="div">Random beer</Button>
                                </div>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12} md={3} className='beerCard'>
                    <Card className="homeCard">
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to='/new'>
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

export default HomePage