import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import ironBeers from './../../services/beers.services'
import BeerList from './../../components/BeerList/BeerList'

const ListBeerPage = () => {

        const [beers, setBeers] = useState([])
        // const [showModal, setShowModal] = useState(false)

        useEffect(() => {
            loadBeers()
        }, [])

        const loadBeers = () => {
            ironBeers
                .getAllBeers()
                .then(({ data }) => setBeers(data))
                .catch(err => console.log(err))
        }

    return (
        <Container>
            <Row>

                <BeerList beers={beers} />

            </Row>
        </Container>
    )
}

export default ListBeerPage