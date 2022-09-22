import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleBeer from "../components/SingleBeer"
import BeerAxios from "../services/BeerAxios"

const SingleBeerPage = () => {
    const beerAxios = new BeerAxios()
    const [beer, setBeer] = useState({})
    const { id } = useParams()


    useEffect(() => {
        beerAxios.getBeerById(id)
            .then((newBeer) => {
                setBeer(newBeer)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <SingleBeer beer={beer} />
    )

}

export default SingleBeerPage