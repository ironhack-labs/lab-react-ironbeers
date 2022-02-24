import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import BeersList from "../../components/BeersList/BeersList"
import beersService from "../../services/beers.services"


const Beers = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }
    return (
        <Container>
            <h1>List of beers</h1>
            <hr />
            <BeersList beers={beers} />
        </Container>
    )
}

export default Beers