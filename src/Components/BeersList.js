import "./BeersList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const BeersList = () => {
const [beers,setBeers] = useState([]);
 useEffect(()=> {

    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => setBeers(response.data) )


 },[beers])


return (

<div className="beers-list">

{beers.map((beer)=> {
    return (
        <div  key = {beer._id}> 
        
        <div className = "beer-image">
        <img src = {beer.image_url} alt = "beer"/>
         </div>

         <div className="beer-information">
            <h3> {beer.name} </h3>
            <h5>{beer.tagline}</h5>
            <p> <b>Created by: </b> {beer.contributed_by}</p>

         </div>
        
        </div>
    )
})}


</div>


)


}



export default BeersList