import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {

  const [beers, setBeers] = useState([]);
  const url="https://ih-beers-api2.herokuapp.com"

  useEffect(() => {
    axios.get(url + "/beers")
      .then(response => {
        console.log(response);
        setBeers(response.data)
      })
      .catch(e => {
        console.log("error getting apartment list from API", e)
      })
  }, []);
  
  return (
    <div>
     <Header />
     <h1>Beers</h1>
    {beers.map((beer) =>{
      return (
        <div key={beer._id}>
        <img src={beer.image_url} alt={beer.name} />
        <h1>{beer.name}</h1>
        <p>{beer.tagline}</p>
        <p>Created by: {beer.contributed_by}</p>
        <Link to={`/beer/${beer._id}`}>See Details</Link>
        </div>
      )
    })}
    </div>
  )
    
  
}

export default Beers;