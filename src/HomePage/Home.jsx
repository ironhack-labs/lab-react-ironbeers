import beers from './../assets/beers.png'
import newBeer from './../assets/new-beer.png'
import randomBeer from './../assets/random-beer.png'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col md={4}>
                        <div>
                            <img src={beers} alt="" />
                            <Link to={'/beers'}><h2>All Beers</h2></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                            <img src={newBeer} alt="" />
                            <Link to={'/random-beer'}><h2>Random Beer</h2></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Col>

                    <Col md={4}>

                        <div>
                            <img src={randomBeer} alt="" />
                            <Link to={'/new-beer'}><h2>New Beer</h2></Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Home 