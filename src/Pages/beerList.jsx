import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "../Components/navbar"

const apiURL='https://ih-beers-api2.herokuapp.com/beers'

function BeerList() {
    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(()=>{
        axios.get(apiURL)
            .then((response)=>{
                setBeers(response.data)
                setFetching(true)
                console.log(beers[0])
            })
            .catch((error)=>{console.log('Error fetching data from API',error)});

    }, [])

    return (
        <div>
            <Navbar />
        <div className="beersList">
            {fetching? (
                beers.map((beer)=>{
                    return(
                    <article className="beerCard">
                        <Link to={`/beers/${beer._id}`}><img src={beer.image_url} alt='beer' style={{width:'100px'}}></img></Link>
                        <div className="beer-info">
                        <h3>{beer.name}</h3>
                        <p>{beer.tagline}</p>
                        <p>{beer.contributed_by}</p>
                        </div>
                </article>)
                }))
                :<h3>Loading</h3>}
            
        </div>
        </div>
    )
}

export default BeerList