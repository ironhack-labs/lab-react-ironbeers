import { Link } from 'react-router-dom'
import { Card, Container, Col, Row } from 'react-bootstrap'

import './home.css'


const HomePage = () => {

    return (
        <section className="home">

            <Container>

                <Row>
                
                    <Col md={4}>
                    
                        <Link to="/beers" >

                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                                <Card.Body>
                                    <Card.Title>All beers</Card.Title>
                                </Card.Body>
                            </Card>

                        </Link>

                    </Col>

                    <Col md={4}>

                        <Link to="/random-beer" >

                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" />
                                <Card.Body>
                                    <Card.Title>Random beer</Card.Title>
                                </Card.Body>
                            </Card>

                        </Link>

                    </Col>

                    <Col md={4}>

                        <Link to="new-beer" >

                            <Card>
                                <Card.Img variant="top" src="https://images.unsplash.com/photo-1457382713369-161d1d986f54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80" />
                                <Card.Body>
                                    <Card.Title>Create new beer</Card.Title>
                                </Card.Body>
                            </Card>

                        </Link>
                        
                        </Col>
                        
                    </Row>

            </Container>

        </section>


    )

}

export default HomePage