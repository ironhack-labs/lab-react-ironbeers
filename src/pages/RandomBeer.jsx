import { useEffect, useState } from "react"
import BeerCardDetails from "../components/DetailsBeers/DetailsBeers"
import BeersAPI from "./../services/ServiceBeers"
import { Container, Row } from "react-bootstrap"


const BeersDetails = () => {


    const [beer, setBeer] = useState()

  


    useEffect(() => {
        loadRandomBeer()
    }, [])

    const loadRandomBeer = () => {
        BeersAPI
            .getRandomBeer()
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <Row className="beerCards">
                {beer && <BeerCardDetails {...beer} />}
            </Row>
        </Container>
    )

}
export default BeersDetails