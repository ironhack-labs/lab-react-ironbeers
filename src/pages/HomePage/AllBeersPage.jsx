import { useState, useEffect } from 'react';
import { Container, Row } from "react-bootstrap"
import './pages.css'
import NavBar from "../../components/NavBar";
import BeerService from '../../services/Beers.services';
import BeersList from '../../components/BeersList'




const AllBeersPage = () => {

    const [beers, setBeers] = useState()

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        BeerService
            .getCoasters()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavBar></NavBar>
            <Container>

                <h1>Galería de Beers</h1>

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

export default AllBeersPage