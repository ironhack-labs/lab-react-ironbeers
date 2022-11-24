import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Header from "../Components/Header.js"


const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function SingleBeer() {
   const { beerId } = useParams()
   const [beer, setBeer] = useState({})

   useEffect(() =>{
      const apiCall = async () => {
         const res = await axios.get((apiEndpoint + beerId))
         setBeer(res.data)
      }
      apiCall()
   }, [])


   return (
      <div>
         <Header></Header>
        <h1>Beer Details</h1>
        <img src={beer.image_url}/>
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <h2>{beer.first_brewed}</h2>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
   )
}

export default SingleBeer;