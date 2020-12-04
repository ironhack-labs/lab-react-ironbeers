import { Row, Col, Container } from 'react-bootstrap'
import Header from './Header'


const RandomBeer = props => {
    console.log(props)
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <img src={props.randomBeer.image_url} alt="beer" />
                    </Col>
                    <Col xs={12} md={7}>
                        <Row>
                            <Col xs={10}>
                                <h1>{props.randomBeer.name}</h1>
                            </Col>
                            <Col xs={2}>
                                <p>{props.randomBeer.attenuation_level}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10}>
                                <h2>{props.randomBeer.tagline}</h2>
                            </Col>
                            <Col xs={2}>
                                <p>{props.randomBeer.first_brewed}</p>
                            </Col>
                        </Row>
                        <p>{props.randomBeer.description}</p>
                        <small>{props.randomBeer.contributed_by}</small>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default RandomBeer