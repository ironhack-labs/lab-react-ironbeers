import './BeerDetails.css'
import { Col, Container, Row } from "react-bootstrap"

const BeerDetails = ({ beer }) => {


    return (

        <Container className='mt-5'>
            <Row>
                <Col>
                    <img src={beer.image_url}></img>
                </Col>
                <Col>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </Col>
            </Row>
        </Container>

    )
}

export default BeerDetails

