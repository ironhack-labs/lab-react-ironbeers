import { useState, useEffect } from "react"
import BeerList from "../../components/BeerList"
import beersServices from "../../services/beers.services"
import SearchBar from "../../components/SearchBar"

const ListBeersPage = () => {

    const [beerBackUp, setBeerBackUp] = useState([])
    const [beers, setBeers] = useState([])

    useEffect(() => {
        beersServices.getBeers()
            .then(({ data }) => {
                setBeerBackUp(data)
                setBeers(data)
            })
    }, [])

    const textHandle = (e) => {
        const text = e.target.value
        beersServices.searchBeer(text).then(({ data }) => setBeers(data))

    }

    return (
        <>
            <SearchBar textHandle={textHandle} />
            <BeerList beers={beers} />
        </>
    )
}

export default ListBeersPage