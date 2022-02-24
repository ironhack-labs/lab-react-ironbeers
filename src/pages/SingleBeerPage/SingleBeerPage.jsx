import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import beersService from "../../services/beers.service"
import { Container } from "react-bootstrap"

const SingleBeerPage = () => {

    const [beerDetails, setBeerDetails] = useState()
    const { id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(id)
            .then(({ data }) => setBeerDetails(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <h1>Detalles {beerDetails.name}</h1>
        </Container>
    )
}

export default SingleBeerPage