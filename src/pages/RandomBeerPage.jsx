
import {useEffect, useState} from "react";
import * as beerAPIs from '../api/beers.js'
import BeerCard from "../components/BeerCard.jsx";

import BeerDetails from "../components/BeerDetails.jsx"




function RandomBeersPage() {

    const [beers, setBeers] = useState(null); 
    
    useEffect(() => {

        beerAPIs.getAll()
            .then(response => {
            
            const {data} = response; 
              const  getRandomIndex = (data) => {
               return  Math.floor(Math.random() * data.length); 
                
              }
         const randomIndex = getRandomIndex(data); 
        const RandomBeer = data[randomIndex]; 
        console.log(RandomBeer); 
        setBeers(RandomBeer); 


            })
            .catch(error => console.error(error)); 
    }, []); 

    console.log(beers); 

    if (!beers) {
        return (
            <div> Loading ..... </div>
        )
    }
    return ( 
    
        <BeerDetails
            
                        name={beers.name}
                        image_url={beers.image_url}
                        tagline = {beers.tagline}
                        contributed_by= {beers.contributed_by}
                        first_brewed = {beers.first_brewed}
                        attenuation_level = {beers.attenuation_level}
                        description = {beers.description}
                        _id = {beers._id}
                    />
            
            
    )
}

export default RandomBeersPage;
