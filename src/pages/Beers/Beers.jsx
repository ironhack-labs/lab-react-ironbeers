import Header from "../../components/Header/Header"
import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import BeersList from "../../components/BeersList/BeersList"
import { Container, Row } from "react-bootstrap"

const Beer = () => {

    const [beers, setBeers] = useState()
    // const [showModal, setShowModal] = useState(false)

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
        <>
            <Header />
            <Container>

                <h1>All the beers</h1>

                <hr />
                <Row>
                    {
                        !beers
                            ?
                            <p>cargando</p>
                            :
                            <BeersList beers={beers} />

                    }
                </Row>

            </Container>
        </>
    )
}

export default Beer

