import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'


const HomePage = () => {

    return (
        <Container className="Home">

            <Row>
                <Col md={{ span: 6, offset: 3 }} >
                    <Link to="/AllBeers">
                        <Card className='mb-3 BeersCard'>
                            <Card.Img variant="top" src={beers} />
                            <Card.Body>
                                <h3>All Beers</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt debitis adipisci quos, autem eaque. Voluptatem non officia fugit, exercitationem nam maiores corporis sed molestias ea, laboriosam quos ratione accusantium.</p>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/NewBeer">
                        <Card className='mb-3 BeersCard'>
                            <Card.Img variant="top" src={newBeer} />
                            <Card.Body>
                                <h3>New Beer</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt debitis adipisci quos, autem eaque. Voluptatem non officia fugit, exercitationem nam maiores corporis sed molestias ea, laboriosam quos ratione accusantium.</p>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/RandomBeer">
                        <Card className='mb-3 BeersCard'>
                            <Card.Img variant="top" src={randomBeer} />
                            <Card.Body>
                                <h3>Random Beer</h3>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt debitis adipisci quos, autem eaque. Voluptatem non officia fugit, exercitationem nam maiores corporis sed molestias ea, laboriosam quos ratione accusantium.</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage