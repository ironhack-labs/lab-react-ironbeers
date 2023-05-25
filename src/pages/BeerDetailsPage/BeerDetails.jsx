import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BeerService from '../../services/beer.services'
import BeerCard from "../../components/BeerCard/BeerCard"


const BeerDetails = () => {
    const { beer_id } = useParams()
    const [beer, setBeer] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeerService
            .getOneBeer(beer_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <Row>
                <Col>
                    <h1>Beers Details :D</h1>
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

export default BeerDetails