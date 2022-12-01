import beersService from "../../services/beers.services"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'



function Beer() {

    const [beers, setBeers] = useState([])
    const loadBeers = () => {
        beersService
            .getBeers()
            .then(({ data }) => setBeers(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadBeers()
    }, [])

    return (
        <div >
            {beers.map((elm) => {
                return <div key={elm._id}>
                    <p>{elm.name}</p>
                    <img src={elm.image_url} alt="beers" />
                    <Link to={`/beers/${elm._id}`}>Ver detalles</Link>
                </div>
            }

            )}

        </div>
    )



}


export default Beer


