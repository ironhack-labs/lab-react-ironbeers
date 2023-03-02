import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BeerDescription from "../../components/BeerDescription/BeerDescription"
import beersService from "../../services/beers.services"

const BeerDetailsPage = () => {
    const { beers_id } = useParams()
    const [beer, setBeer] = useState('')


    useEffect(() => {
        beersService
            .getOneBeer(beers_id)
            .then(({ data }) => setBeer(data))
            .catch(err => console.log(err))
    })
    return <BeerDescription beer={beer} />
}

export default BeerDetailsPage






