import './SingleBeer.css'
import { Container, Row, Col } from 'react-bootstrap'

function SingleBeer({beer}){
    return(
        <Container className="beer-details-container">
            <Row>
                <Col xs={12} md={4}>
                    <img src={beer.image_url} alt=""></img>
                </Col>
                <Col xs={9} md={3}>
                    <h3>{beer.name}</h3>
                </Col>
                <Col xs={2} md={9}>
                    <h3 className="grey-color">{beer.attenuation_level}</h3>
                </Col>
                <Col xs={9} md={3}>
                    <span className="grey-color">{beer.tagline}</span>
                </Col>
                <Col xs={2} md={9}>
                    <span>{beer.first_brewed}</span>
                </Col>
                <Col xs={12}>
                    <p>{beer.description}</p>
                </Col>
                <Col xs={12}>
                    <span className="grey-color">{beer.contributed_by}</span>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleBeer