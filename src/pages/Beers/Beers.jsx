import beerService from "../../services/beers.services"
import { useState, useEffect } from "react"

const BeerList = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])


    const loadBeers = () => {
        beerService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.error(err))
    }

    export default BeerList