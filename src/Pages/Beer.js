import axios from "axios";
import { useEffect, useState } from "react";
function Beer(){
    const [beers, setBeers] = useState([]);
 
  useEffect(() => {                                // <== ADD THE EFFECT
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        console.log('response.data', response.data);
        setBeers(response.data)
      });
    
  }, [] );
    return(
        <div>
    <h1>My Beer Page</h1>
    {beers.map((beer) => (
        <div key={beer._id} className="card">
          <img src={beer.image_url
} alt="bière" />
          <h3>{beer.name}</h3>
        </div>
      ))}
    
        </div>
    )

}
export default Beer;