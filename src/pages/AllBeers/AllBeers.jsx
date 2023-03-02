import { useEffect, useState } from "react"
import beersService from "../../services/beers.services"
import BeersList from "../../components/BeerList/BeerList"

const AllBeers = () => {

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
        <BeersList beers={beers} />
    )

}

export default AllBeers