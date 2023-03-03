import { useEffect, useState } from "react"
import AllBeers from "../../components/NavBar/AllBeers/AllBeers"

import beersService from './../../services/beers.services'


const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        loadBeers()
    }, [])


    const loadBeers = () => {

        beersService
            .getBeers()
            .then(({ data }) => {
                setBeers(data)

            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <h1>Listado Cervezas</h1>
            {
                <AllBeers beers={beers}></AllBeers>
            }
        </>
    )
}

export default BeersPage

