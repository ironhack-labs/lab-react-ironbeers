import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BeersAPI from "../../services/beers.service"
import BeerDetails from "./../../components/BeerDetails/BeerDetails"

const BeerDetailsPage = () => {

    const { id } = useParams()

    const [beer, setBeer] = useState({})

    useEffect(() => {
        loadBeer()
    }, [])

    const loadBeer = () => {
        BeersAPI
            .getOneBeer(id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }


    return (
        <BeerDetails {...beer} />
    )
}
export default BeerDetailsPage