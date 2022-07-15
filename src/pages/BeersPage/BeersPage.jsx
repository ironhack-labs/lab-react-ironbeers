import { useEffect, useState } from "react"
import beersServices from "./../../services/beers.services"
import AllBeers from "./../../Components/AllBeers/AllBeers"


const BeersPage = () => {

    const [beers, setBeers] = useState([])
    console.log(beers)
    useEffect(() => {
        loadBeers()
    }, [])

    const loadBeers = () => {
        beersServices
            .getAllBeers()
            .then(({ data }) => {
                setBeers(data)
            })
            .catch(err => console.error(err))

    }

    return (
        <>
            <h1>holi</h1>
            <AllBeers beers={beers} />
        </>

    )
}

export default BeersPage