import { useState, useEffect } from "react";    
import axios from "axios";                      
 
function BeersPage() {
  const [beers, setBeers] = useState([]);
 
  useEffect(() => {                             
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] ); 
 
  
  return (
    <div>
      <h3>List of Beers</h3>
      {beers.map((beer) => (
        <div key={beer._id} >
          <img src={beer.image_url} alt="beer" />
          <h3>{beer.title}</h3>
          <p>Details: {beer.details}</p>
        </div>
      ))}
      
    </div>
  );
}
 
export default BeersPage; 