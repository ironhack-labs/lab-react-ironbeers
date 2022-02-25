import './DetailBeerPage.css'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Params } from 'react-router-dom'
import beersService from '../../services/beers.services'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BeerCard from '../../components/beerCard/BeerCard'



const DetailBeerPage = () => {

    const [beer, setbeer] = useState({})
    const {id} = useParams()

    useEffect(() => {
        console.log(id)
        loadBeer()
    }, [])

    const loadBeer = () => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => setbeer(data))
            .catch(err => console.log(err))

    }

    return (
        <>
            <Header></Header>
            <BeerCard beer={beer}></BeerCard>
        </>
    )
}

export default DetailBeerPage