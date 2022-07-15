import beersService from "../../services/beers.services"
import Header from "../../components/Header/Header"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Details = () => {
    
    const [beer, setBeer] = useState([])
    
    const { beer_id } = useParams()

    useEffect(() => {
        beersService
            .getOneBeer(beer_id)
            .then(({ data }) => console.log(data))
            // (setBeer(data)))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Header />
            <h1>details page</h1>
            <h3>Name: {beer.name}</h3>
        </>
    )
}

export default Details
