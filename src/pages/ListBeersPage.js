import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import NavBar from "../components/NavBar"

function ListBeersPage() {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            setBeers(response.data)
        })
    }, [])

    if (!beers) return <p>Page is loading...</p>

    return (
        <div>
            <NavBar />
            
            <div>
                <h1>List of beers:</h1>
                {beers.map(beer => (
                    <div key={beer._id}>
                    <Link to={`/beers/${beer._id}`} style={{textDecoration: 'none', color: 'black'}}>
                        <div className="beer-container">
                        <div className="beer-img">
                            <img src={beer.image_url} alt="Beer" height={200} />
                        </div>
                        <div className="beer-info">
                            <h1>{beer.name}</h1>
                            <h3>{beer.tagline}</h3>
                            <p>{beer.description}</p>
                        </div>
                        </div>
                    </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListBeersPage