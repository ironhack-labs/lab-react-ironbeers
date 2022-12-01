import { Card, Col, Row } from "react-bootstrap";

const BeerCard = ({ beer }) => {

    return (
        <Card key={beer._id} style={{ width: "100%" }}>
            <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Col xs='6' lg='6'>
                    <Card.Img
                        variant='top'
                        src={beer.image_url}
                        alt={beer.name}
                    />
                </Col>
                <Card.Body>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Col xs='6' lg='6'>
                            <Card.Title>{beer.name}</Card.Title>
                        </Col>
                        <Col xs='6' lg='6'>
                            <Card.Title>{beer.attenuation_level}</Card.Title>
                        </Col>
                    </Row>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Col xs='6' lg='6'>
                            <Card.Title>{beer.tagline}</Card.Title>
                        </Col>
                        <Col xs='6' lg='6'>
                            <Card.Title>{beer.first_brewed}</Card.Title>
                        </Col>
                    </Row>
                    <Card.Title>{beer.description}</Card.Title>
                    <Card.Text>
                        {beer.contributed_by}
                    </Card.Text>
                </Card.Body>

            </Row>
        </Card>
    );
}

export default BeerCard;