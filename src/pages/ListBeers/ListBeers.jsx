import { useState, useEffect } from "react"
import beerService from "../../services/beers.service"
import { Link } from "react-router-dom"
import './ListBeers.css'



const ListBeers = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        beerService.getBeers()
            .then(({ data }) => setBeers(data))
            .catch((err) => console.log(err))
    }, [])

    return (
        beers.map(beers => {
            return (

                <div className="AllBeers">
                    <h1>{beers.name}</h1>
                    <img src={beers.image_url} alt="" />
                    <p> {beers.tagline}</p>
                    <p>{beers.contributed_by}</p>
                    <Link to={`/details/${beers._id}`}>Details</Link>
                </div>
            )
        })
    )
}

export default ListBeers
