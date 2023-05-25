import { Col, Container, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import BeerList from "../../components/BeerList/BeerList"
import BeerService from '../../services/beer.services'


const BeerPages = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <Row>
                <Col>
                    <h1>Beers :D</h1>
                    <hr />
                </Col>
            </Row>

            <Row>

                {
                    !beers
                        ?
                        <h1>Loader</h1>
                        :
                        <BeerList beers={beers} />
                }

            </Row>

        </Container>
    )
}

export default BeerPages