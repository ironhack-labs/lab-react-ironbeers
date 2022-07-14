import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"

import imgAll from './../assets/beers.png'
import imgNew from './../assets/new-beer.png'
import imgRandom from './../assets/random-beer.png'

const HomePage = () => {
    return (
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 8 }}>
                        <Link to='/all'>
                            <img src={imgAll} alt="beers" />
                        </Link>
                        <h1>All Beers</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>

                        <Link to='/all'>
                            <img src={imgNew} alt="beers" />
                        </Link>
                        <h1>Random Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>

                        <Link to='/new'>
                            <img src={imgRandom} alt="beers" />
                        </Link>
                        <h1>New Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage