
import { useState, useEffect, React } from "react";
import axios from "axios";
import { format } from 'date-fns';

function RandomBeerPage() {

    const [randomBeer, setRandomBeer]= useState(null);
    const [error, setError]= useState(null);
    
    
    useEffect(() => {
    
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
    .then((response) => {
    
        setRandomBeer(response.data)
        console.log(response.data);

    })
    .catch((error)=> setError(error));
    
    
    }, []);

    if(!randomBeer){
        return <p>Loading...</p>
     }

     //date format (npm i date-fns --save)
const parts = randomBeer.first_brewed.split('/');
const brewDate = new Date(parts[1], parts[0] - 1, 1); // Month is 0-based// new Date(parts[1], parts[0] - 1) also works
const newDateFormat = format(brewDate, 'MMMM yyyy');
     

return(
<div className="random-details">
       
       {randomBeer && (
        <div className="card" style={{ textAlign: "center" }}>
       <img className="beer-small" src={randomBeer.image_url} alt={randomBeer.name} width="100"/>
       <h2>{randomBeer.name}</h2>
       <h4>{randomBeer.tagline}</h4>
       <h4>{newDateFormat}</h4>
           <h5>{randomBeer.description}</h5>
           <h5>Contributed by: {randomBeer.contributed_by}</h5>
           <h5>Attenuation Level:{randomBeer.attenuation_level}</h5>
       </div>
       )};
       </div>
   


)


}

export default RandomBeerPage;
