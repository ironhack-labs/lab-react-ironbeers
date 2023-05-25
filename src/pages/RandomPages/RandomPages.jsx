
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import BeerService from '../../services/beer.services'
import BeerCard from "../../components/BeerCard/BeerCard"


const RandomPages = () => {
    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeerService
            .getRandom()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <Row>
                <Col>
                    <h1>Beers Random :D</h1>
                    <hr />
                </Col>
            </Row>

            <Row>

                {
                    !beer
                        ?
                        <h1>Loader</h1>
                        :
                        <Col md={{ span: 6, offset: 3 }}>
                            <BeerCard {...beer} />

                        </Col>
                }

            </Row>

        </Container>
    )
}

export default RandomPages