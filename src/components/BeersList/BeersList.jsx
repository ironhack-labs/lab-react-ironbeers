import { Col, Container, Row } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"

const BeersList = ({ beers }) => {

    return (
        <Container className="mt-3">
            <Row>
                {
                    beers.map(elm => {
                        return (
                            <Col md={{ span: 3 }} key={elm._id}>
                                <BeerCard {...elm} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default BeersList
