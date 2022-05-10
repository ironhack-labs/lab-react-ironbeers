import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react';
import axios from 'axios';

const BeerDetails = ()=>{
const [beer,setBeer] = useState(null);
  const {beerId} = useParams();
  console.log(beerId)

  useEffect(()=>{

    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + beerId)
    .then((response) =>{
setBeer(response.data)

    })
  },[beerId]);
return (
<div>

  <h1>Beer Details</h1>

  {!beer && <h3>Beer not found!</h3>}
  {/* image
name
tagline
first_brewed
attenuation_level
description
contributed_by */}

  {beer && (
    <>
    <img src={beer.image_url} alt="" />
   <h2>{beer.name}</h2> 
   <p>{beer.tagline}</p>
   <p>{beer.first_brewed}</p>
   <p>{beer.attenuation_level}</p>
   <p>{beer.description}</p>
   <p>{beer.contributed_by}</p>
    
    
    </>
  )}
</div>


)



}

export default BeerDetails