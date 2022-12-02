import { Row, Col, Container } from "react-bootstrap"
import "./BeerDetails.css"

const BeerDetails = ({ beer }) => {

    const { image_url, name, tagline, first_brewed, attenuation_level, description, contributed_by } = beer

    return (
        <>
            <Container>
                <Row className="flex-column align-items-center beerDetails">
                    <img src={image_url} alt="" />
                    <Col md={6} className="beerDetailsText">
                        <Col md={9} >
                            <p>{name}</p>
                            <p>{tagline}</p>
                        </Col>
                        <Col md={3} >
                            <p className="text-end">{first_brewed}</p>
                            <p className="text-end">{attenuation_level}</p>
                        </Col>
                    </Col>
                    <Row>
                        <Col>
                            <p className="text-justify">{description}</p>
                            <p className="text-start">{contributed_by}</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )

}

export default BeerDetails