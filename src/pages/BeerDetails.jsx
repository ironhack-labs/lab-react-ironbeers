import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import SingleBeerDetail from "../components/SingleBeerDetail/SingleBeerDetail"
import ironbeersService from "../services/ironbeers.service"

const BeerDetails = () => {

    const { beerId } = useParams()
    const [beerDetail, setBeerDetail] = useState({})

    useEffect(() => {
        ironbeersService
            .getSingleBeer(beerId)
            .then(({ data }) => setBeerDetail(data))
    }, [beerId])


    return (
        <SingleBeerDetail beerDetail={beerDetail} />
    )
}

export default BeerDetails