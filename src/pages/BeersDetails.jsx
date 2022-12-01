import { useEffect, useState } from "react"
import BeerCardDetails from "../components/DetailsBeers/DetailsBeers"
import BeersAPI from "./../services/ServiceBeers"
import { Container, Row } from "react-bootstrap"
import {useParams} from "react-router-dom"

const BeersDetails = () => {


    const [beer, setBeer] = useState()

    const {id} = useParams()


    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeersAPI
            .getOneBeer(id)
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