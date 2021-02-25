import { Link } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

const BeerRow = ({ beer }) => {
    return (
        <>
            <Container>
                <Row className="justify-content-around my-5">
                    <Col xs={2} className="d-flex justify-content-center">
                        <img src={beer.image_url} style={{ height: 250 }} alt={beer.name} />
                    </Col>
                    <Col xs={8} className="mt-5">
                        <Link to={beer._id}><h1>{beer.name}</h1></Link>
                        <h2 style={{ color: 'grey' }}>{beer.tagline}</h2>
                        <p><strong>Created by: </strong><big>{beer.contributed_by}</big></p>
                    </Col>
                </Row>
            </Container>
            <hr />
        </>
    )
}

export default BeerRow