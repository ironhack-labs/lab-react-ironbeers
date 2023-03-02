import { useEffect, useState } from "react"
import { Col, Container, Row, Card } from "react-bootstrap"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.service"

const BeerDetails = ({ image_url, name, description, }) => {
    return (

        <Container>
            <Row className="justify-content-center">
                <Col className="m-3" md={{ span: 8, offset: 1 }}>

                    <Card className='my-4'>
                        <Card.Img variant="top" src={image_url} alt={name} style={{ height: '300px', objectFit: 'contain' }} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>

    )
}
export default BeerDetails 