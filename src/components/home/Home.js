import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container, Row, Col, Card } from 'react-bootstrap'
import './Home.css'

export class Home extends Component {

    render() {
        return (
            <Container>
                
                <Row>
                    
                    <Col md={4}>
                        <Link to="/beers">
                            <Card className="card">
                                <Card.Img variant="top" src="https://bestmediainfo.com/wp-content/uploads/2020/05/beers_8.jpg" />
                                <Card.Body>
                                    <Card.Title>All Beers</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col md={4}>
                        <Link to="/random-beer">
                            <Card className="card">
                                <Card.Img variant="top" src="https://www.chicagotribune.com/resizer/s6fO5FLwMrg9PRj6zUt_RB7ZeHY=/fit-in/800x533/smart/filters:fill(black)/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N554POZ7JZE3PDHHFSCFKEAKRA.jpg" />
                                <Card.Body>
                                    <Card.Title>Random Beers</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                    <Col md={4}>
                        <Link to="/new-beer">
                            <Card className="card">
                                <Card.Img variant="top" src="https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2018/04/26/beer-quiz-25-questions-to-test-your-knowledge/2807204-1-eng-GB/Beer-quiz-25-questions-to-test-your-knowledge_wrbm_large.jpg" />
                                <Card.Body>
                                    <Card.Title>New Beer</Card.Title>
                                    <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                </Row>

            </Container>
        )
    }
}



export default Home