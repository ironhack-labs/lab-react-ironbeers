import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx"

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/random"


const RandomBeer = () => {
   const [random, setRandom] = useState ([]) // random is the data, set is what the data will be
   useEffect(() =>{
       const apiCall = async () => {
           const res = await axios.get(apiEndpoint)
           setRandom(res.data)        
       }
       apiCall()
   }, [])
 
       return (
        <div>
            <Header></Header>
            <h1>Random One</h1>
            <img src={random.image_url} width={100} alt="beerimage"/>
            <h1>{random.name}</h1>
            <p>{random.tagline}</p>
            <p>{random.first_brewed}</p>
            <p>{random.attenuation_level}</p>
            <p>{random.description}</p>
            <p>{random.contributed_by}</p>  
        </div>
       )
}

 

export default RandomBeer