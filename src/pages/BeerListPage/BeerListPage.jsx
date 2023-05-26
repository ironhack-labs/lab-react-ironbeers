import { useState, useEffect } from "react"

import { Col, Container, Row } from "react-bootstrap"
import BeerList from "../../components/BeerList/BeerList"
import beersService from "../../services/beers.service"





const AllBeersPage = () => {


    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }


    if (!beers) {
        return <h1>Loading...</h1>
    }


    return (
        <Container>
            {/* cargar header */}
            <Row>
                <Col>

                    <h1>SOY ALL BEERS PAGE</h1>
                    <BeerList beers={beers} />




                </Col>
            </Row>


        </Container>
    )
}

export default AllBeersPage