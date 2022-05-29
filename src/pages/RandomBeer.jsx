import React, {useState, useEffect} from 'react'
import{Link} from "react-router-dom"
import axios from "axios"
import NavBar from '../components/NavBar'; 

function RandomBeer() {

    const [beerRandom, setBeerRandom] = useState(null)

    const getBeerRandom = async () => {
        try {
          let response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random");
          setBeerRandom(response.data);
          console.log(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getBeerRandom()
      }, []);


  return (

    <div className="beerDetails">
     <NavBar/> 
     {beerRandom && (
       <div className="beerDetDiv">
          <div className="beerDetImgDiv">
        <img src={beerRandom.image_url} alt="something" />
        </div>
    <h1>{beerRandom.name}</h1>
    <div className="beerDetInnerInfoDiv">
    <h2>{beerRandom.tagline}</h2>
    <h2>{beerRandom.first_brewed}</h2>
    <h2>{beerRandom.atenuation_level}</h2>
    </div>
    <h3>{beerRandom.description}</h3>
    <p><b>Contributed by:</b> {beerRandom.contributed_by}</p>
    </div>
     ) }
   </div>
  )
}

export default RandomBeer