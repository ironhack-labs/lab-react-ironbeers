import { Col, Container, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.service"
import DetailedBeerCard from "../../components/DetailedBeerCard/DetailedBeerCard"
const BeerDetails = () => {

    const [beer, setBeer] = useState()
    const { beer_id } = useParams()


    const handleBeer = () => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        handleBeer()
    }, [])


    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col md={6}>
                    {beer && <DetailedBeerCard beer={beer} />}
                </Col>
            </Row >
        </Container>

    )


}

export default BeerDetails