import serviceApi from "../services/beer-api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BeerDetails from "../components/BeerDetails/BeerDetails"

const BeerInfo = () => {

    const { id } = useParams()

    const [beer, setBeer] = useState({})

    const getBeerInfo = () => {
        serviceApi
            .getBeerByID(id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getBeerInfo(id)
    }, [])

    return (
        < BeerDetails beer={beer} />
    )

}

export default BeerInfo