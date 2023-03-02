import React from "react"
import { Container, Row } from "react-bootstrap"
import Navigation from "../../components/Navigation/Navigation"

const NewBeerForm = () => {

    return (
        <Container>
            <Row>
                <Navigation />
            </Row>
            <Row>
                <h1>NewBeerForm</h1>
            </Row>
        </Container>
    )
}

export default NewBeerForm