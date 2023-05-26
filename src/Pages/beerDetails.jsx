import Navbar from "../Components/navbar"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

function BeerDetails() {
    const {beerId} = useParams()

    const[fetching,setFetching]=useState(false);
    const[beer, setBeer]=useState('');

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response)=>{
                setBeer(response.data);
                setFetching(true);
            })
            .catch((error)=>{console.log('Error fectching API data', error)})

    }, [beerId])



  return (
    <div>
        <Navbar/>
        <div>
        <article className="beerCard">
                        <img src={beer.image_url} alt='beer' style={{width:'100px'}}></img>
                        <div className="beer-info">
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p>{beer.first_brewed}</p>
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.description}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                </article>
        </div>
    </div>
  )
}

export default BeerDetails