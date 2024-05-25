import {useEffect, useState} from "react";
import * as beerAPIs from '../api/beers.js'
import BeerCard from "../components/BeerCard.jsx";
import {useParams } from 'react-router-dom';
import BeerDetails from "../components/BeerDetails.jsx"

function BeerDetailsPage() {
    const [beers, setBeers] = useState([]); 
    const { _id } = useParams();
    useEffect(() => {
        beerAPIs.getOne({_id})
            .then(response => {
                const {data} = response; 
                setBeers(data); 
            })
            .catch(error => console.error(error)); 
    }, [_id]); 

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

export default BeerDetailsPage;
