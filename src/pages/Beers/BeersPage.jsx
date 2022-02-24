import { useEffect, useState } from "react"
import BeerCard from "../../components/BeerCard/BeerCard"
import BeersAPI from "./../../services/beers.service"
import { Container, Row } from "react-bootstrap"

const BeersPage = () => {


    const [beers, setBeers] = useState([])


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeersAPI
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="beerCards">
                {beers.map((e, index) => <BeerCard key={index} {...e} />)}
            </Row>
        </Container>
    )

}
export default BeersPage