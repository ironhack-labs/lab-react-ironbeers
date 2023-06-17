import { useState } from "react"
import beerServices from "../services/beer.service"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import BeerDetails from "../components/BeerDetails"



function BeerDetailsPage() {
    const [beer, setBeer] = useState({})
    const { id } = useParams()

    const getBeer = async () => {
        const res = await beerServices.getOne(id)
        setBeer(res.data)
    }

    useEffect(() => {
        getBeer()
    }, [])


    return ( <BeerDetails beer={beer} />)
}

export default BeerDetailsPage