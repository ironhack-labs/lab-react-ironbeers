import { useEffect, useState } from "react"
import beersService from "../../services/beers.service"
import BeersList from "../../components/BeersList/BeersList"

const AllBeersPage = () => {

    // estado con las cervezas
    const [beers, setBeers] = useState([])

    // cuando se monte, que cargue las cervezas de la api
    useEffect(() => {
        loadBeers()
    }, [])

    // llamada al servicio
    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <BeersList beers={beers} />
        </>
    )
}

export default AllBeersPage