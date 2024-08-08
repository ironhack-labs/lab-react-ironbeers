import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"


function BeerDetailsPage() {
const [beer,setBeer] = useState(null)
const {beerId} =useParams()



useEffect(()=>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then((oneBeer)=>{
        setBeer(oneBeer.data)
    })
    .catch((err)=>{
        console.log(err)
    })
},[])

  return (
    <div>
        <Navbar/>

        {beer && (
            <div>
            <img src={beer.image_url} alt={beer.name} className="img-size" />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Beer Attenuation Level:{beer.attenuation_level}</p>
            <p className="word-wrap1">{beer.description}</p>
            <p>Contributed By: {beer.contributed_by}</p>
            </div>
        )}
    

    </div>
  )
}

export default BeerDetailsPage