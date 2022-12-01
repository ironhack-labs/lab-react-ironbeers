import { useEffect, useState } from "react"
import BeerCard from "../components/ListBeers/ListBeers"
import BeersAPI from "./../services/ServiceBeers"
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