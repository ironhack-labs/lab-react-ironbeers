import { useEffect, useState } from "react"
import BeerList from "../../components/BeerList/BeerList"
import beersService from '../../services/beers.service'


const BeerListPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()

    }, [])

    const loadBeers = () => {

        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

    }

    return (
        <>
            <BeerList beers={beers} />
        </>
    )
}

export default BeerListPage