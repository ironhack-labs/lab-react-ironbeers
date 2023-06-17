import { Card, Row, Col } from "react-bootstrap"


function BeerDetails({beer}){
    return(
        <Row className="justify-content-center">
            <Col sm={6} md={4} lg={3}>
                <Card>
                    <Card.Header>

                        {beer.name} {" "}
                        <span className="mb-2 text-muted">
                            {beer.attenuation_level}
                        </span>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col xs={4}>
                                <img src={beer.image_url} style={{ width: "100%" }} />
                            </Col>
                            <Col >
                                <Card.Subtitle className="mb-2 text-muted">
                                    {beer.tagline}
                                </Card.Subtitle>
                                <Card.Subtitle>
                                    {beer.first_brewed}
                                </Card.Subtitle>
                                <p>{beer.description}</p>
                                <p className="mb-2 text-muted">{beer.contributed_by}</p>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
            </Col>

        </Row>

    )
}

export default BeerDetails