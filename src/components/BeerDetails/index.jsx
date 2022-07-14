import { Container, Row, Col } from "react-bootstrap"
const BeerDetails = ({
    name,
    image_url,
    attenuation_level,
    tagline,
    description,
    first_brewed,
    contributed_by
}) => {

    return (
        <Container>
            <Row>
                <Col xs={{ span: 2, offset: 5 }}>
                    <img src={image_url} alt={name} />
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 10, offset: 0 }}>
                    <p>{name}</p>
                    <p>{tagline}</p>
                </Col>
                <Col xs={{ span: 2, offset: 0 }}>
                    <p>{attenuation_level}</p>
                    <p>{first_brewed}</p>
                </Col>
            </Row>
            <p>{description}</p>
            <p>{contributed_by}</p>

        </Container >
    )
}

export default BeerDetails