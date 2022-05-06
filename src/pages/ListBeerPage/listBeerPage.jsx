import reactDom from "react-dom"
import { Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import beersService from '../../services/beers.service'
import BeersList from '../../components/beerList'

const ListBeerPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => {
                console.log(data)
                setBeers(data)
            })
            .catch(err => console.log(err))
    }
    return (

        <Container>
            <h1>ListPage</h1>
            <hr />
            <BeersList beers={beers} />

            <Link to="/">
                <Button variant="dark">Volver</Button>
            </Link>
        </Container>


    )
}

export default ListBeerPage