import {useState, useEffect} from 'react'
import beersService from "../../services/beers.services"

import BeersList from "../../components/BeersList/BeersList"


function Beers () {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])

    function loadBeers () {
        beersService
            .getBeers()
            .then(({data}) => setBeers(data))
            .catch(err => console.error(err))
    }

    return(
        <BeersList beers={beers}/>
    )
}

export default Beers