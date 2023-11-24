import { useEffect, useState } from "react"
import beersService from "../services/beersService"
import { Link } from "react-router-dom"




const AllBeersPage = () => {

    const [beers, setBeers] = useState([])


    useEffect(() => {
        loadBeers()
    }, [])


    const loadBeers = () => {
        beersService
            .getAllBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    console.log(beers)
    return (
        !beers
            ?
            <h1>loading...</h1>
            :
            <div>
                {
                    beers.map(elm => {
                        return (
                            <div>
                                <h1>{elm.name}</h1>
                                <img src={elm.image_url} alt=""></img>
                                <p>{elm.tagline}</p>
                                <p>{elm.contributed_by}</p>
                                <Link to={`/beers/${elm._id}`}>Detalles</Link>
                            </div>
                        )
                    })
                }

            </div>

    )



}

export default AllBeersPage
