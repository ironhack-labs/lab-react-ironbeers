import Header from "./Header/Header";
import { useState, useEffect} from "react";
import axios from 'axios';

function RandomBeer (){

const [randomBeer , setRandomBeer] =useState("")

useEffect (() => {
        axios.get ("https://ih-beers-api2.herokuapp.com/beers/random")
             .then((response)=>{
                setRandomBeer(response.data)
             })
},[])

return (
    <div>
        <Header/>
        <div className="BeerDetailsCard">
{randomBeer ? ( <div>
    <img src={randomBeer.image_url} alt="beer"/>
{console.log("the random beer", randomBeer)}

 <h1>{randomBeer.name}</h1>
 <p id='beertagline'>{randomBeer.tagline}</p>
 <p id='beerFirstBrewed'>{randomBeer.first_brewed}</p>
 <p id='beerAttenuationLevel' >{randomBeer.attenuation_level}</p>
 <p id='beerDiscription' >{randomBeer.description}</p>
 <p id='beerContributedBy' >{randomBeer.contributed_by}</p>
            
</div> ): null }
           
          </div>
    </div>
)

}
export default RandomBeer;