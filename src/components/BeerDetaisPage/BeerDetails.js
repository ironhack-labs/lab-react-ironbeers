import Header from '../Header/Header';
import Beers from '../BeersPage/Beers';
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect} from "react";
import axios from 'axios';

function BeersDetails (props){

    const { id } = useParams();
    console.log('_id -->', id);

    const [selectedBeer , setSelectedBeer] =useState("")

   // const filteredBeer = props.beers.filter((beer)=>{
   //    return beer._id === id})    

    useEffect (() => {
        axios.get ("https://ih-beers-api2.herokuapp.com/beers/" + id)
             .then((response)=>{
                setSelectedBeer(response.data)
             })
},[id])

    return (
<div>
<Header/>

<div className="BeerDetailsCard">
{selectedBeer ? ( <div>
    <img src={selectedBeer.image_url} alt="beer"/>
{console.log("the selected beer", selectedBeer)}

 <h1>{selectedBeer.name}</h1>
 <p id='beertagline'>{selectedBeer.tagline}</p>
 <p id='beerFirstBrewed'>{selectedBeer.first_brewed}</p>
 <p id='beerAttenuationLevel' >{selectedBeer.attenuation_level}</p>
 <p id='beerDiscription' >{selectedBeer.description}</p>
 <p id='beerContributedBy' >{selectedBeer.contributed_by}</p>
            
</div> ): null }
           
          </div>
          </div>
    )
}

export default BeersDetails;