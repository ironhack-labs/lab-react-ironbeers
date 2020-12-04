import { Row, Col, Container } from 'react-bootstrap'
import Header from './Header'


const BeerDetails = props => {
    const selectedBeer = props.beer.filter(elm => elm._id === props.match.params.id)
    return (
        <>
            <Header/>
            <Container>
            {selectedBeer.map(elm =>
                <Row>
                    <Col xs={12} md={5}>
                        <img src={elm.image_url} alt="beer" />
                    </Col>
                    <Col xs={12} md={7}>
                        <Row>
                            <Col xs={10}>
                                <h1>{elm.name}</h1>
                            </Col>
                            <Col xs={2}>
                                <p>{elm.attenuation_level}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={10}>
                                <h2>{elm.tagline}</h2>
                            </Col>
                            <Col xs={2}>
                                <p>{elm.first_brewed}</p>
                            </Col>
                        </Row>
                        <p>{elm.description}</p>
                        <small>{elm.contributed_by}</small>
                    </Col>
                </Row>
            )}
            </Container>
        </>
    )
}

export default BeerDetails