import { useState, useEffect } from "react";     // <== IMPORT useEffect
import { Link } from "react-router-dom";
import axios from "axios";
import BeerDetails from "./BeerDetails";

function BeersPage() {
    const [beers, setBeers] = useState([]);
   
    useEffect(() => {                                // <== ADD THE EFFECT
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          console.log('response.data', response.data);
          setBeers(response.data)
        });
      
    }, [] );  // <- [] means: Run the effect only once, after initial render
   
    
    return (
      <div>
        <h3>List of beers</h3>
        {beers.length === 0 && (
          <h4>No beers to show 📭. GET the data from the API!</h4>
        )}
   
        {
        beers.map((beer) => (
        <Link to={<BeerDetails />}>  
            <div key={beer._id} className="card">
            <img src={beer.image_url} alt="beer" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
          </div>
        </Link>
        ))
        }
        
      </div>
    );
  }
   
  export default BeersPage;