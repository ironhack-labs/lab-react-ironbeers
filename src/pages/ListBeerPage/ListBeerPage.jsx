import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import beersService from "../../services/beers.services"
import BeerList from "../../components/BeerList/BeerList"

const ListBeerPage = () => {

    const [beersList, setBeersList] = useState([])

    useEffect(() => {
        loadBears()
    }, [])

    const loadBears = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeersList(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1>All beers</h1>
            <hr />

            <Row>
                <Col md={{ span: 3 }} >
                    <BeerList beerData={beersList} />
                </Col>
            </Row>
        </Container>
    )
}

export default ListBeerPage