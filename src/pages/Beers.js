import { useState, useEffect } from "react"
import Header from "../components/Header"
import axios from "axios"
import { Link } from "react-router-dom"

function Beers() {

    const [beers, setBeers] = useState(null)
    const [beer, setBeer] = useState(null)

    const handleSearch = (e) => setBeer(e.target.value)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    useEffect (() => {
        setBeers(null)


        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${beer}`) 
            .then(response => {
                setBeers(response.data)
                
            })  
        
    }, [beer])

    return(
        <>
        <Header />
        <p>Beers</p>

        <label>Search for a beer!</label>
        <input type="text" value={beer} onChange={handleSearch} name="beer"></input>
        {beers && beers.map(beer => {
            return(
                <div key={beer._id}> 
                    <Link to={`/beer/${beer._id}`}>
                        <img src={beer.image_url} alt="" />
                        <p>{beer.name}</p>
                        <p>{beer.tagline}</p>
                        <p>Created by: {beer.contributed_by}</p>
                    </Link>
                </div>

            )
        })}
        </>
    )
}

export default Beers