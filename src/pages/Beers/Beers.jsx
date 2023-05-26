import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar/NavBar"
import beersService from "../../services/beers.services"
import { Container, Row } from "react-bootstrap"
import BeerList from "../../components/BeerList/BeerList"

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
            <Row>
                {
                    !beers
                        ?
                        // <Loader />
                        <h1>Loading</h1>
                        :
                        <BeerList beers={beers} />
                }
            </Row>
        </Container>
    )
}

export default Beers