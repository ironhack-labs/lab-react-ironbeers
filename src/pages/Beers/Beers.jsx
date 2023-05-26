import { Container, Row } from "react-bootstrap"
import NavBar from "../../components/Navigation/Navigation"
import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import BeersList from "../../components/BeersList/BeersList"
const Beers = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <NavBar />

            <h1>Beers List</h1>

            <hr />

            <Row>
                {
                    !beers
                        ?
                        <h1>Charging...</h1>
                        :
                        <BeersList beers={beers} />
                }
            </Row>

        </Container>
    )
}

export default Beers