import { useParams, Link } from "react-router-dom";
import { useState, useEffect, React } from "react";
import axios from "axios";
import { format } from 'date-fns';

//const API_URL = "https://ih-beers-api2.herokuapp.com/beers";


function BeerDetailsPage({beersAll}) {

const {beerId} = useParams();

const [foundBeer, setFoundBeer]= useState(null);
const [error, setError]= useState(null);

useEffect(() => {

axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
.then((response) => {

    setFoundBeer(response.data)
  
    console.log(response.data);
})
.catch((error)=> setError(error));


}, [beerId]);



if(!foundBeer){
   return <p>Loading...</p>
}

//date format (npm i date-fns --save)
const parts = foundBeer.first_brewed.split('/');
const brewDate = new Date(parts[1], parts[0] - 1, 1); // Month is 0-based// new Date(parts[1], parts[0] - 1) also works
const newDateFormat = format(brewDate, 'MMMM yyyy');

console.log(newDateFormat);


return (

    <div className="Beer-details">
       
    {foundBeer && (
     <div className="card" style={{ textAlign: "center" }}>
    <img className="beer-small" src={foundBeer.image_url} alt={foundBeer.name} width="100"/>
    <h2>{foundBeer.name}</h2>
    <h4>{newDateFormat}</h4>
        <h5>{foundBeer.description}</h5>
        <h5>Contributed by: {foundBeer.contributed_by}</h5>
        <h5>Attenuation Level:{foundBeer.attenuation_level}</h5>
    </div>
    )};
    </div>

)
 }
   
export default BeerDetailsPage;