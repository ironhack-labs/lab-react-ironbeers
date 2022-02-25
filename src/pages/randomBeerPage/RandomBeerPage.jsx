import Header from '../../components/header/Header'
import { useState, useEffect } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'
import beersService from '../../services/beers.services'
import { Link } from 'react-router-dom'
import './RandomBeerPage.css'
import BeerCard from '../../components/beerCard/BeerCard'

const RandomBeerPage = () => {

    const [beer, setbeer] = useState({})

    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersService
            .getRandom()
            .then(({ data }) => setbeer(data))
            .catch(err => console.log(err))

    }



    return (
        <div>
            <Header></Header>
            <BeerCard beer={beer}></BeerCard>
        </div>
    )
}

export default RandomBeerPage