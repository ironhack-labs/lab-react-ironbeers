import userEvent from "@testing-library/user-event"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BeersService from "../../services/beers.services"





const Details = () => {


    const [beers, setBeers] = useState([])

    const { beer_id } = useParams()

    useEffect(() => {
        BeersService
            .getOneBeers(beer_id)
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))

    }, [])




    return (
        <h1>Details</h1>
    )
}


export default Details