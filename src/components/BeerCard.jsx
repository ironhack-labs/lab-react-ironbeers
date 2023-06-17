import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"




function BeerCard({ image, name, tagline, createdBy, id}) {

    return (
        <Link to={`/beers/${id}`}>
            <Container>
                <Row>
                    <Col xs={2}>
                        <img
                            style={{ width: "100%" }}
                            src={image} alt="beer picture" />
                    </Col>
                    <Col>
                        <h5>{name}</h5>
                        <h6>{tagline}</h6>
                        <p><b>Created by: {createdBy}</b></p>

                    </Col>
                    <hr />
                </Row>
            </Container>
        </Link>
        
    )
}

export default BeerCard