import Header from "../Header/Header"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import axios from "axios"

function BeersList() {
    
    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    return (
        <div>
            <Header />
            
            {beers.map((beer) => {
                return (
            <Link to={`/beers/${beer._id}`}>
                    <div key={beer._id} className="card">
                        <img src={beer.image_url} alt="apartment" />
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                    </div>
            </Link>
                )
            })}

        </div>


    )
}

export default BeersList