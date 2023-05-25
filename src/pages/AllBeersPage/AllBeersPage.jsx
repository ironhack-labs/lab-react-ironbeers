import { useEffect, useState } from "react"
import BeersList from "../../components/BeersList/BeersList"
import beersService from "../../services/beers.services"
import { Container, Row } from "react-bootstrap"
import Header from "../../components/Header/Header"

const AllBeersPage = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {

        beersService.getBeers()
            .then(beers => setBeers(beers.data))
            .catch(err => console.log(err))

    }, [])


    if (!beers) {
        return (
            <h1> loading... </h1>
        )
    }

    return (
        <>
            <Header />
            <Container className="mt-5">
                <Row>
                    <BeersList beerList={beers} />
                </Row>
            </Container>
        </>

    )
}

export default AllBeersPage
