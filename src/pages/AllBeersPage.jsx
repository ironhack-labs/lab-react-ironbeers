import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function AllBeersPage() {
    const [ beers, setBeers ] = useState([])

    async function getAllBeers() {
        try {
            const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
            if (response.ok) {
                const data = await response.json()
                setBeers(data)
            }
        } catch (err) {
            console.log('Error loading beers: ' + err)
        }
    }

    useEffect(()=>{getAllBeers()}, [])
    
    return (
        <div>
            {beers.map(beer => (
                <Link to={`/beers/${beer._id}`} key={beer._id}>
                <div>
                    <img src={beer.image_url} width="100"></img>
                    <h3>{beer.name}</h3>
                    <h4>{beer.tagline}</h4>
                    <p>Created by: {beer.contributed_by}</p>
                    <hr></hr>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default AllBeersPage;
