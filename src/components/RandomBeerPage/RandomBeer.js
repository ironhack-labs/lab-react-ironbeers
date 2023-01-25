import Header from "../Header/Header";
import { useState, useEffect} from "react";
import axios from 'axios';
import './RandomBeer.css'

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
        
{randomBeer ? ( <div>
    <img src={randomBeer.image_url} className="beerImage" alt="beer"/>
{console.log("the random beer", randomBeer)}

<div className="BeerDetailsCard">
 <h1>{randomBeer.name}</h1>
 <section id='section'>
 <p id='beertagline'>{randomBeer.tagline}</p>
 <p id='beerFirstBrewed'>{randomBeer.first_brewed}</p>
 </section>
 <p id='beerAttenuationLevel' >{randomBeer.attenuation_level}</p>
 <p id='beerDiscription' >{randomBeer.description}</p>
 <p id='beerContributedBy' >{randomBeer.contributed_by}</p>
 </div>          
</div> ): null }
         
    </div>
)

}
export default RandomBeer;