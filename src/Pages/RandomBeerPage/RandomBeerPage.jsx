import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import beersService from "../../services/beers.service"
import DetailedBeerCard from "../../components/DetailedBeerCard/DetailedBeerCard"
const RandomBeerPage = () => {

    const [randomBeer, setRandomBeer] = useState()

    const handleBeer = () => {

        beersService
            .getRandomBeer()
            .then(({ data }) => setRandomBeer(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        handleBeer()
    }, [])


    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={6}>
                    {randomBeer && <DetailedBeerCard beer={randomBeer} />}
                </Col>
            </Row >
        </Container>

    )


}

export default RandomBeerPage