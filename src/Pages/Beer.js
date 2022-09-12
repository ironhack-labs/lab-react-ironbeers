import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
          <img src={beer.image_url} alt="bière" />
          <div>
            <NavLink to="/beer/:beerId"><h2>{beer.name}</h2></NavLink>         
          <h3>{beer.tagline}</h3>
          <b>Created by: {beer.contributed_by}</b>
          </div>
        </div>
      ))}
    
        </div>
    )

}
export default Beer;