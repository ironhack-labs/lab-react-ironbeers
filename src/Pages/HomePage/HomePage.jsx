import HomeSecction from '../../components/HomeSecction/HomeSecction';
import './HomePage.css'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'
import { Row, Col, Container } from 'react-bootstrap';



function HomePage() {
    return (
        <Container>
            <Row className='d-flex justify-content-center flex-wrap'>
                <Col md={6} className='m-4'>
                    <HomeSecction
                        title={'BEER LIST'}
                        image={beers}
                        text={'Get all beers ist'}
                        link={'/beers'}
                    />
                </Col>
                <Col md={6} className='mb-4'>
                    <HomeSecction
                        title={'RANDOM BEER'}
                        image={randomBeer}
                        text={'Get random beer'}
                        link={'/random-beer'}
                    />
                </Col>
                <Col md={6} className='mb-4'>
                    <HomeSecction
                        title={'CREATE BEER'}
                        image={newBeer}
                        text={'Create a new beer'}
                        link={'/new-beer'}
                    />
                </Col>

            </Row >
        </Container>


    )
}

export default HomePage;