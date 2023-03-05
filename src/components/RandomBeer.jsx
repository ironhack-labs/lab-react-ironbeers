import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function RandomBeer() {

  const [beer, setBeer] = useState([])

  const getBeer = async () => {
    try {
      let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");

      setBeer(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getBeer()
  }, [])

   return (
     <div>
      <h1>Random Beer</h1>
         <div>
           <img src={beer.image_url} alt="picture of beer" height={"200px"} />
           <h4>{beer.name}</h4>
           <p>{beer.tagline}</p>
           <p>{beer.first_brewed}</p>
           <p>{beer.attenuation_level}</p>
           <p>{beer.description}</p>
           <p>{beer.contributed_by}</p>
         </div>
     </div>
   );


}
export default RandomBeer