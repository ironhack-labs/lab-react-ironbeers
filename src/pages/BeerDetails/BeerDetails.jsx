import React from "react"
import { Container, Row } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"

const BeersDetails = () => {

    return (
        <Container>
            <Row>
                <Navigation />
            </Row>
            <Row>
                <h1>BeersDetails</h1>
            </Row>
        </Container>
    )
}

export default BeersDetails