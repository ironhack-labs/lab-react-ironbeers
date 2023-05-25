import Navigation from "../../components/Navigation/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react"
import { Container, Row, Modal, Button } from "react-bootstrap"
import beerService from '../../services/beers.services'
import BeersList from "../../components/BeersList/BeersList";

const Beers = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <Row>

                <Navigation />

                {
                    !beers ? <h1>cargando</h1> : <BeersList beers={beers} />
                }

            </Row>

        </Container>
    )
}

export default Beers