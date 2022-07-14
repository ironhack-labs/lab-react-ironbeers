import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beersServices from "../../services/beers.services.js"
import BeerDetails from "./../../components/BeerDetails"
const DetailsBeerPage = () => {
    const [beer, setBeer] = useState({})
    const { ID } = useParams()

    useEffect(() => {
        beersServices.getOneBeer(ID)
            .then(({ data }) => {
                setBeer(data)
            })
    }, [])

    return (
        <BeerDetails {...beer} />
    )
}

export default DetailsBeerPage