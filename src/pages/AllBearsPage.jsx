import axios from 'axios';
import {useState, useEffect} from 'react';
import Header from '../';
import { Link } from "react-router-dom";  

const AllBeersPage = ()=>{

const [allBeers, setBeers] = useState([])

useEffect(() => {                                
  axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      console.log('response.data', response.data);
      setBeers(response.data)
    });

}, [] ); 
return (
  <>
  <Header/>

{allBeers.map(eachBeer =>{
return(
  <div key={eachBeer._id} style={{display:'flex'}}>
    <div>
    <img src={eachBeer.image_url} alt="" style={{height:'150px'}} />
    </div>
    <div>
    <h1>{eachBeer.name}</h1>
    <p>{eachBeer.tagline}</p>
    <p>Created by: {eachBeer.contributed_by}</p>
    <Link to={`/beers/${eachBeer._id}`}>Beer Details</Link>
    </div>
  </div>
)
})}
</>
)
}

export default AllBeersPage 