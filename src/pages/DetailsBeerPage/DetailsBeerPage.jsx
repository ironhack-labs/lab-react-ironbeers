import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DetailsBeerCard from "../../components/DetailsBeerCard/DetailsBeerCard"
import beersService from "../../services/beers.services"

const DetailsBeerPage = () => {

    const { id } = useParams()


    const [beerById, setBeerById] = useState({})

    useEffect(() => {
        loadBeerById()
    }, [])

    const loadBeerById = () => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => {
                setBeerById(data)
            })
            .catch(err => console.log(err))
    }


    return (

        <DetailsBeerCard beer={beerById} />

    )
}

export default DetailsBeerPage