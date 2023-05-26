import Header from "../../Components/Header"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


export default function RandomBeer() {
   const {beerId} = useParams();
   const [beer, setBeer] = useState();

   const getBeer = async () => {

    try {
        let response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        setBeer(response.data)
        console.log(response.data)
    } catch (error) {
        console.log(error);
    }
};

useEffect(() => {
    getBeer();
}, []);


  return (
    <div>
      {beer && (
        <div>
        <Header/>
        <h1>Beer Details</h1>
        <img src={beer.image_url}/>
        <h1>{beer.name}</h1>
        <h2>{beer.tagline}</h2>
        <h2>{beer.first_brewed}</h2>
        <p>{beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
        </div>
    )}
    </div>
    
  )
}
